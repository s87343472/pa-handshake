import { readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

/**
 * Registers the `pa-handshake` skill that ships in this bundle.
 *
 * The skill body, the full convention (`SPEC.md`) and the card template live
 * under `skills/pa-handshake/`. The provider is created lazily by the skills
 * registry and reads the files from the package directory, so the catalog only
 * carries the skill description and the body loads on demand.
 */

const PROVIDER_NAME = 'pa-handshake'
const SKILL_DIR = new URL('skills/pa-handshake/', import.meta.url)
const SKILL_FILE = new URL('SKILL.md', SKILL_DIR)
const SKILL_PATH = fileURLToPath(SKILL_FILE)
const RESOURCE_BASE = Object.freeze({ kind: 'directory', path: fileURLToPath(SKILL_DIR) })
const CUSTOM_SKILL_RANK = 300

/** Cordis plugin name. */
const name = 'pa-handshake-skill'
/** Service this plugin registers into. */
const inject = ['skills']

/**
 * Read the two frontmatter fields this plugin needs plus the Markdown body.
 * @param {string} raw
 * @returns {{ name: string, description: string, content: string }}
 */
function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  const match = /^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/.exec(text)
  if (match === null) throw new Error('pa-handshake: SKILL.md must begin with YAML frontmatter')
  const fields = {}
  for (const line of match[1].split('\n')) {
    const entry = /^([A-Za-z][\w-]*):[ \t]*(.*)$/.exec(line)
    if (entry === null) continue
    fields[entry[1]] = entry[2].trim().replace(/^(['"])([\s\S]*)\1$/, '$2')
  }
  const skillName = fields.name
  const description = fields.description
  if (typeof skillName !== 'string' || skillName.length === 0) {
    throw new Error('pa-handshake: SKILL.md frontmatter needs a name')
  }
  if (typeof description !== 'string' || description.length === 0) {
    throw new Error('pa-handshake: SKILL.md frontmatter needs a description')
  }
  return { name: skillName, description, content: match[2].trim() }
}

/**
 * Register the `pa-handshake` provider.
 * @param {import('@deepseek-ai/cordis').Context} ctx
 */
function apply(ctx) {
  ctx.skills.registerProvider(() => {
    let parsed
    let modified

    async function load() {
      const info = await stat(SKILL_FILE)
      if (parsed !== undefined && info.mtimeMs === modified) return parsed
      parsed = parseFrontmatter(await readFile(SKILL_FILE, 'utf8'))
      modified = info.mtimeMs
      return parsed
    }

    function summary(definition) {
      return {
        name: definition.name,
        description: definition.description,
        invocation: { modelInvocable: true, userInvocable: true },
        provider: PROVIDER_NAME,
        source: 'custom',
        resourceBase: RESOURCE_BASE,
        path: SKILL_PATH,
      }
    }

    return {
      name: PROVIDER_NAME,
      async list() {
        const definition = await load()
        return [{ ...summary(definition), rank: CUSTOM_SKILL_RANK, locator: SKILL_FILE.href }]
      },
      async get() {
        const definition = await load()
        return { ...summary(definition), content: definition.content }
      },
    }
  })
}

export { apply, inject, name }
