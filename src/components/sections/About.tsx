import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { WA } from '../../data/whatsappMessages'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=1200&q=80'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-20 items-center">

          {/* Image — 3/5 on large screens */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="relative">
              <motion.div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10]" whileHover={{ scale: 1.01 }}>
                <img src={ABOUT_IMAGE} alt="Karnataka areca palm plantation" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#1A3D2B] text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-display text-3xl sm:text-4xl font-black">10L+</p>
                <p className="font-sans text-[10px] sm:text-xs text-white/70 mt-1">plates / month</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text — 2/5 on large screens */}
          <div className="lg:col-span-2 mt-6 lg:mt-0">
            <ScrollReveal direction="right">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3 sm:mb-4">Our Story</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-charcoal leading-tight mb-4 sm:mb-6">
                A Family Story from the Heart of Karnataka
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <p className="text-stone text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Nestled in Somalapura Village, Tumakuru District — deep in Karnataka's arecanut belt — our family factory turns naturally shed areca palm leaf sheaths into beautiful, biodegradable tableware.
              </p>
              <p className="text-stone text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Every plate is made without a single chemical, dye, or adhesive. We collect only fallen leaves — no trees are cut. The result is tableware that's honest to its origins.
              </p>
              <p className="text-stone text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Buyers from Tamil Nadu regularly arrive by lorry for bulk orders. Our capacity of 10 lakh plates per month means we're ready for any scale — from local caterers to international importers.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton url={WA.general} label="Get in Touch" size="md" className="w-full sm:w-auto" />
                <a
                  href="https://maps.google.com/?q=Gubbi,Tumakuru,Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2D6A2D] text-[#2D6A2D] font-semibold rounded-full text-sm sm:text-base hover:bg-[#2D6A2D] hover:text-white transition-colors w-full sm:w-auto"
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
