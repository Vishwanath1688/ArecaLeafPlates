/**
 * GET /api/setup
 *
 * One-time DB setup — creates the enquiries table.
 * Run once after linking Vercel Postgres:
 *   curl https://your-site.vercel.app/api/setup
 *
 * DELETE or protect this endpoint after first run.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres'

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  // Simple protection — require a setup token
  const token = _req.query.token
  if (token !== process.env.SETUP_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized — pass ?token=YOUR_SETUP_TOKEN' })
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS enquiries (
        id          SERIAL PRIMARY KEY,
        name        TEXT NOT NULL,
        email       TEXT NOT NULL,
        country     TEXT,
        product     TEXT,
        quantity    TEXT,
        message     TEXT,
        source      TEXT DEFAULT 'export-form',
        status      TEXT DEFAULT 'new',
        created_at  TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries (created_at DESC)
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries (status)
    `

    return res.status(200).json({
      success: true,
      message: 'Database setup complete. enquiries table created.',
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[SKE][ERROR][api/setup]', message)
    return res.status(500).json({ error: message })
  }
}
