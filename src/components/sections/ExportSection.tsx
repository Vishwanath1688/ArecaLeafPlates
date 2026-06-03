import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Toast } from '../ui/Toast'
import { EXPORT_COUNTRIES } from '../../data/exportCountries'
import { createLogger } from '../../utils/logger'

const logger = createLogger('ExportSection')

export function ExportSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const dismissToast = useCallback(() => setToast(null), [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    logger.info('Export enquiry submitted', { country: payload.country, product: payload.product })

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, source: 'export-form' }),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(json?.error ?? `HTTP ${res.status}`)
      }

      logger.info('Enquiry saved', { id: json.id, country: payload.country })
      setSubmitted(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      logger.error('Enquiry submission failed', { message })
      setToast('Failed to send enquiry. Please reach us on WhatsApp instead.')
    }
    setLoading(false)
  }

  return (
    <>
    <Toast message={toast} type="error" onDismiss={dismissToast} />
    <section id="export" className="py-20 md:py-32 bg-[#1A3D2B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="inline-block bg-[#7FB069]/20 text-[#7FB069] font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Export Enquiries Welcome
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                We Supply to the World
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We supply to buyers across India and internationally.
                You arrange freight from our factory in Karnataka — we ensure quality and timely packing.
                Direct from manufacturer, no middlemen.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-5 py-3 text-sm text-white/80 mb-10">
                <span className="w-2 h-2 bg-[#7FB069] rounded-full shrink-0"></span>
                Ex-Factory Supply · Buyer Arranges Freight · Direct from Manufacturer
              </div>
            </ScrollReveal>

            {/* Country flags */}
            <div className="grid grid-cols-4 gap-4">
              {EXPORT_COUNTRIES.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 0.07}>
                  <motion.div
                    className="flex flex-col items-center gap-2 group"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span className="text-4xl">{c.flag}</span>
                    <span className="font-sans text-xs text-white/60 text-center leading-tight group-hover:text-white transition-colors">
                      {c.name}
                    </span>
                    {c.status === 'active' && (
                      <span className="w-1.5 h-1.5 bg-[#7FB069] rounded-full" />
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — inquiry form */}
          <ScrollReveal direction="right">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-[#7FB069] rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-8 h-8">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Enquiry Received!</h3>
                  <p className="text-white/60">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-white mb-6">
                    Send an Export Enquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name', placeholder: 'Your Name / Company', type: 'text' },
                      { name: 'email', placeholder: 'Email or WhatsApp number', type: 'text' },
                    ].map(f => (
                      <input
                        key={f.name}
                        name={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-[#7FB069] transition-colors"
                      />
                    ))}
                    <select
                      name="country"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-[#7FB069] transition-colors"
                    >
                      <option value="" className="bg-[#1A3D2B]">Select Country</option>
                      {['USA', 'United Kingdom', 'Germany', 'UAE', 'Australia', 'Singapore', 'Canada', 'India', 'Other'].map(c => (
                        <option key={c} value={c} className="bg-[#1A3D2B]">{c}</option>
                      ))}
                    </select>
                    <input
                      name="product"
                      type="text"
                      placeholder="Product interest (e.g. 10 inch round plates)"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-[#7FB069] transition-colors"
                    />
                    <input
                      name="quantity"
                      type="text"
                      placeholder="Estimated quantity required"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-[#7FB069] transition-colors"
                    />
                    <textarea
                      name="message"
                      placeholder="Additional requirements or questions..."
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-[#7FB069] transition-colors resize-none"
                    />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#7FB069] hover:bg-[#2D6A2D] text-white font-semibold py-4 rounded-xl transition-colors font-sans"
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? 'Sending...' : 'Send Enquiry →'}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    </>
  )
}
