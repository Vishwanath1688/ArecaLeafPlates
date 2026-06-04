import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const STEPS = [
  { step: '01', title: 'The Fallen Leaf',         body: 'Only naturally shed areca palm leaf sheaths are collected. No trees are cut. No forests harmed. Nature provides, we listen.',                             image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80' },
  { step: '02', title: 'Sun-Dried Naturally',      body: 'Leaves are sun-dried using natural heat — no chemicals, no artificial treatments. The Karnataka sun does all the work.',                                 image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80' },
  { step: '03', title: 'Shaped by Heat & Pressure', body: 'Each plate is pressed and shaped using precision heat-press machines at our Tumakuru factory. Form follows nature.',                                    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80' },
  { step: '04', title: 'Quality Checked',           body: 'Every single plate is hand-inspected before packing. Only the best leaves make it to your table.',                                                     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80' },
  { step: '05', title: 'Packed for Bulk',            body: 'Packed in bulk cartons, ready for lorries. 10 lakh plates leave our factory every month — reliable supply at any scale.',                            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80' },
  { step: '06', title: 'Delivered to Your World',    body: 'Supplying bulk buyers across India and internationally. Direct from factory, no middlemen — the most honest supply chain in tableware.',               image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&q=80' },
]

export function LeafToTable() {
  const { ref, progress } = useScrollProgress()
  const activeIndex = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length))
  const step = STEPS[activeIndex]

  return (
    <section ref={ref} className="relative" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/90 via-[#0a1f12]/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-10">
          <motion.div className="h-full bg-[#7FB069]" style={{ scaleX: progress, transformOrigin: 'left' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 w-full">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#7FB069] mb-3 sm:mb-4">
                  Step {step.step} of {String(STEPS.length).padStart(2, '0')}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
                  {step.title}
                </h2>
                <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Step dots */}
            <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 lg:left-12 xl:left-20 flex gap-2 sm:gap-3">
              {STEPS.map((_, i) => (
                <motion.div key={i} className="rounded-full bg-white/30"
                  animate={{ width: i === activeIndex ? 28 : 6, height: 6, backgroundColor: i === activeIndex ? '#7FB069' : 'rgba(255,255,255,0.3)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="absolute top-6 sm:top-8 right-4 sm:right-8 z-20 hidden sm:block">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50">From Leaf to Table</p>
        </div>
      </div>
    </section>
  )
}
