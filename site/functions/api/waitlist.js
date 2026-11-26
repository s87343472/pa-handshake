// Cloudflare Pages Function: POST /api/waitlist
// Stores early-access emails in a KV namespace bound as WAITLIST.

export async function onRequestPost({ request, env }) {
  let email = "";
  try {
    const body = await request.json();
    email = String(body.email || "").trim().toLowerCase();
  } catch {
    return json({ error: "Send JSON like {\"email\": \"you@example.com\"}." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ error: "Enter a valid email address." }, 400);
  }

  if (!env.WAITLIST) {
    return json({ error: "Waitlist storage is not configured." }, 500);
  }

  const key = `email:${email}`;
  const existing = await env.WAITLIST.get(key);
  if (!existing) {
    await env.WAITLIST.put(key, JSON.stringify({
      email,
      joined_at: new Date().toISOString(),
      country: request.cf?.country || null,
    }));
  }
  return json({ ok: true });
}

export function onRequest() {
  return json({ error: "Use POST." }, 405);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
