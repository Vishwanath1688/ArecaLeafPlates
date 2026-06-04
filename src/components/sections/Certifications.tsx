import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Icon } from '../ui/Icon'

const CONFIRMED   = [
  { label: 'GST Registered',      note: 'Sri Kalleshwara Enterprises, Karnataka' },
  { label: 'Naturally Food-Safe', note: 'Zero synthetic materials, adhesives, or dyes' },
]
const IN_PROGRESS = [
  { label: 'FSSAI',       note: 'Food Safety & Standards Authority of India' },
  { label: 'ISO 9001',    note: 'Quality Management System' },
  { label: 'EU EN 13432', note: 'European Compostability Standard' },
  { label: 'ASTM D6400',  note: 'USA Compostability Standard' },
]

export function Certifications() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">Trust & Compliance</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal uppercase tracking-wide">Certifications</h2>
          <p className="text-stone mt-3 text-sm sm:text-base max-w-lg mx-auto font-sans">
            We are actively pursuing certifications to serve domestic and international export markets.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="bg-[#1A3D2B] rounded-2xl p-6 sm:p-8">
              <h3 className="font-display font-semibold uppercase tracking-widest text-xs text-[#7FB069] mb-5 sm:mb-6">Confirmed</h3>
              <div className="space-y-4 sm:space-y-5">
                {CONFIRMED.map((c, i) => (
                  <motion.div key={c.label} className="flex gap-3 sm:gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  >
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                    >
                      <Icon name="check_circle" size={20} fill className="text-[#7FB069] shrink-0 mt-0.5" />
                    </motion.div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm sm:text-base">{c.label}</p>
                      <p className="font-sans text-xs text-white/50 mt-0.5">{c.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-purewhite border border-[#2D6A2D]/15 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display font-semibold uppercase tracking-widest text-xs text-[#2D6A2D] mb-5 sm:mb-6">In Progress</h3>
              <div className="space-y-4 sm:space-y-5">
                {IN_PROGRESS.map((c, i) => (
                  <motion.div key={c.label} className="flex gap-3 sm:gap-4 items-start"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  >
                    <Icon name="radio_button_unchecked" size={20} className="text-[#2D6A2D]/40 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-semibold text-charcoal text-sm sm:text-base">{c.label}</p>
                      <p className="font-sans text-xs text-stone mt-0.5">{c.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
