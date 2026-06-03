import { motion } from 'framer-motion'
import { Leaf, FlaskConical, Recycle, Flame, TrendingUp } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const FEATURES = [
  {
    icon: Leaf,
    title: '100% Natural',
    body: 'Made from naturally fallen areca palm leaf sheaths. No trees cut, no forests harmed — pure gift of nature.',
  },
  {
    icon: FlaskConical,
    title: 'Zero Chemicals',
    body: 'Absolutely no dyes, adhesives, bleaches, or artificial coatings. What you get is exactly what nature made.',
  },
  {
    icon: Recycle,
    title: 'Fully Biodegradable',
    body: 'Decomposes naturally in weeks. No microplastics, no landfill burden. The most honest disposable on earth.',
  },
  {
    icon: Flame,
    title: 'Heat Resistant',
    body: 'Handles hot curries, gravies, rice, and beverages with ease. Sturdy enough for any Indian meal.',
  },
  {
    icon: TrendingUp,
    title: 'The Future of Tableware',
    body: 'EU & India plastic bans are driving explosive global demand. The $452M market is growing at 17% annually.',
  },
]

export function WhyArecaLeaf() {
  return (
    <section className="py-20 md:py-32 bg-purewhite">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">
            Why Choose Areca Leaf
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal">
            Nature's Perfect Plate
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <motion.div
                className="bg-cream rounded-2xl p-8 h-full border border-transparent hover:border-[#7FB069]/30 transition-colors"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(26,61,43,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <f.icon size={22} className="text-[#7FB069]" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{f.title}</h3>
                <p className="text-stone leading-relaxed text-sm">{f.body}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
