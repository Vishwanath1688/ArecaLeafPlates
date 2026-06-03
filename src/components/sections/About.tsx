import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { WA } from '../../data/whatsappMessages'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=900&q=80'

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Image — 3/5 */}
          <ScrollReveal direction="left" className="md:col-span-3">
            <div className="relative">
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[4/3]"
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={ABOUT_IMAGE}
                  alt="Karnataka areca palm plantation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#1A3D2B] text-white rounded-2xl p-5 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-display text-4xl font-black">10L+</p>
                <p className="font-sans text-xs text-white/70 mt-1">plates / month</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text — 2/5 */}
          <div className="md:col-span-2">
            <ScrollReveal direction="right">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-4">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
                A Family Story from the Heart of Karnataka
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <p className="text-stone leading-relaxed mb-4">
                Nestled in Somalapura Village, Tumakuru District — deep in Karnataka's arecanut belt — our family factory has been turning naturally shed areca palm leaf sheaths into beautiful, biodegradable tableware.
              </p>
              <p className="text-stone leading-relaxed mb-4">
                Every plate is made without a single chemical, dye, or adhesive. We collect only fallen leaves — no trees are cut. The result is tableware that's honest to its origins.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                Buyers from Tamil Nadu regularly arrive by lorry to collect bulk orders. Our capacity of 10 lakh plates per month means we're ready for any scale — from local caterers to international importers.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton url={WA.general} label="Get in Touch" size="md" />
                <a
                  href="https://maps.google.com/?q=Gubbi,Tumakuru,Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2D6A2D] text-[#2D6A2D] font-semibold rounded-full text-base hover:bg-[#2D6A2D] hover:text-white transition-colors"
                >
                  View on Maps →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
