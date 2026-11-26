# PA Handshake — DSH 插件安装说明

这个压缩包里有：`pa-handshake-plugin/`（DSH bundle）和本说明。

## 这是什么

- DSH bundle：`@local/pa-handshake` v0.1.0，插入插件行 `pa-handshake-skill`。
- 只注册一个技能 `pa-handshake`，不新增工具、不联网、不后台运行。
- 技能实现 PA Handshake v0.1：建立公开 PA 名片、查合作方的公开历史、回答握手邮件，最多 10 轮，最后给主人一页简报。邮件只起草，不代发；只分享公开或主人授权的材料。

## 安装（任选一种）

1. 桌面版：**Plugins → Add plugin**，选择解压后的 `pa-handshake-plugin` 目录，启用。
2. Agent / CLI：`plugin_manager` 的 `install_bundle`，`target` 指向该目录的绝对路径。

注意：本地目录安装是链接式安装（Windows 上是 junction）。安装后**不要移动或删除**这个目录；移动后需要重新安装。

## 生效与验证

- 新会话的技能列表里会出现 `pa-handshake`；输入 `/pa-handshake`，或用自然语言（“帮我做 PA 名片”“查一下这个人”）触发。
- 当前会话不一定立刻刷新，开新会话最稳。
- 可选验证：用 `skill` 工具加载 `pa-handshake`，它报告的 base directory 应指向 `pa-handshake-plugin/skills/pa-handshake/`。

## 来源与许可

这是 PA Handshake 官方的 DSH 插件，源文件在 https://github.com/s87343472/pa-handshake/tree/main/install/deepseek/dsh-plugin 。`skills/pa-handshake/` 下的文件来自仓库里的 `skill/SKILL.md`、`SPEC.md` 和 `card/pa-card.md`，SKILL.md 只多了一段 DeepSeek Harness 说明。全部内容按 CC BY 4.0 许可，可以自由使用和转发，注明出处即可。

## 文件清单

```
pa-handshake-plugin/
├── package.json            # @local/pa-handshake，dsh.bundle.patch
├── cordis.patch.yml        # 插入 pa-handshake-skill 行
├── index.js                # 向 ctx.skills 注册技能，正文按需读取
├── locale/en.json, zh.json # 插件页标题、说明、详情文档路径
├── icon.svg                # 插件图标
├── docs/DETAIL*.md, preview.svg
├── README.md
└── skills/pa-handshake/
    ├── SKILL.md
    ├── SPEC.md
    └── card-template.md
```

---

# English

`pa-handshake-plugin/` is a DSH bundle (`@local/pa-handshake` 0.1.0) that registers the `pa-handshake` skill. It adds no tools, makes no network calls, and runs no background work. Install it with **Plugins → Add plugin** and the unzipped directory, or with `plugin_manager` `install_bundle`. The install is a link: do not move or delete the directory afterwards.

This is the official PA Handshake plugin for DeepSeek Harness. The skill files come from `skill/SKILL.md`, `SPEC.md` and `card/pa-card.md` in https://github.com/s87343472/pa-handshake (SKILL.md adds one paragraph for DeepSeek Harness). Everything is CC BY 4.0.
