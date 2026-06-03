/**
 * POST /api/enquiry
 *
 * Receives export/contact enquiry form submissions.
 * Stores in Vercel Postgres and sends email notification via Resend.
 *
 * Environment variables required (set in Vercel Dashboard → Project → Settings → Environment Variables):
 *   POSTGRES_URL          — from Vercel Postgres (auto-set when you link the DB)
 *   RESEND_API_KEY        — from resend.com (free, 3k emails/month)
 *   NOTIFY_EMAIL          — your email address to receive notifications
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Schema (run once via /api/setup) ──────────────────────────────────────────
// CREATE TABLE IF NOT EXISTS enquiries (
//   id          SERIAL PRIMARY KEY,
//   name        TEXT NOT NULL,
//   email       TEXT NOT NULL,
//   country     TEXT,
//   product     TEXT,
//   quantity    TEXT,
//   message     TEXT,
//   source      TEXT DEFAULT 'export-form',
//   status      TEXT DEFAULT 'new',
//   created_at  TIMESTAMPTZ DEFAULT NOW()
// );

interface EnquiryBody {
  name: string
  email: string
  country?: string
  product?: string
  quantity?: string
  message?: string
  source?: string
}

function validate(body: Partial<EnquiryBody>): string | null {
  if (!body.name?.trim())  return 'Name is required'
  if (!body.email?.trim()) return 'Email or WhatsApp is required'
  if (body.name.length > 200)  return 'Name too long'
  if (body.email.length > 200) return 'Email too long'
  return null
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // CORS — allow requests from your domain
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN ?? '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const body = req.body as Partial<EnquiryBody>

  // Validate
  const validationError = validate(body)
  if (validationError) {
    return res.status(400).json({ error: validationError })
  }

  const { name, email, country = '', product = '', quantity = '', message = '', source = 'export-form' } = body

  try {
    // 1. Store in DB
    const { rows } = await sql`
      INSERT INTO enquiries (name, email, country, product, quantity, message, source)
      VALUES (${name}, ${email}, ${country}, ${product}, ${quantity}, ${message}, ${source})
      RETURNING id, created_at
    `
    const enquiryId = rows[0]?.id
    const createdAt = rows[0]?.created_at

    // 2. Send notification email
    if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
      await resend.emails.send({
        from:    'SKE Enquiries <onboarding@resend.dev>',
        to:      process.env.NOTIFY_EMAIL,
        subject: `New Enquiry #${enquiryId} — ${name} from ${country || 'Unknown'}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1A3D2B;padding:24px;border-radius:8px 8px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">
                New Enquiry — Sri Kalleshwara Enterprises
              </h2>
            </div>
            <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#666;width:140px">Enquiry ID</td><td style="padding:8px 0;font-weight:bold">#${enquiryId}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:bold">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Contact</td><td style="padding:8px 0">${email}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Country</td><td style="padding:8px 0">${country || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Product</td><td style="padding:8px 0">${product || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Quantity</td><td style="padding:8px 0">${quantity || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Message</td><td style="padding:8px 0">${message || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Received</td><td style="padding:8px 0">${new Date(createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
              </table>
              <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e0e0e0">
                <a href="https://wa.me/${email.replace(/[^0-9]/g, '')}"
                   style="background:#25D366;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold">
                  Reply on WhatsApp
                </a>
              </div>
            </div>
          </div>
        `,
      })
    }

    return res.status(200).json({ success: true, id: enquiryId })

  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[SKE][ERROR][api/enquiry]', message, err)
    return res.status(500).json({ error: 'Failed to submit enquiry. Please try WhatsApp.' })
  }
}
