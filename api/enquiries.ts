/**
 * GET /api/enquiries?token=ADMIN_TOKEN
 *
 * Returns all enquiries — simple admin read endpoint.
 * Protected by ADMIN_TOKEN env variable.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Token-based protection
  const token = req.query.token
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const status  = req.query.status as string | undefined
    const limit   = Math.min(Number(req.query.limit  ?? 50), 200)
    const offset  = Number(req.query.offset ?? 0)

    const { rows } = status
      ? await sql`
          SELECT * FROM enquiries
          WHERE status = ${status}
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${offset}
        `
      : await sql`
          SELECT * FROM enquiries
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${offset}
        `

    const { rows: countRows } = await sql`SELECT COUNT(*) FROM enquiries`

    return res.status(200).json({
      enquiries: rows,
      total: Number(countRows[0].count),
      limit,
      offset,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[SKE][ERROR][api/enquiries]', message)
    return res.status(500).json({ error: message })
  }
}
