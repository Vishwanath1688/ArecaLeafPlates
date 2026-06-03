import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ProductCard } from '../ui/ProductCard'
import { PRODUCTS, CATEGORIES, type ProductCategory } from '../../data/products'

export function Products() {
  const [active, setActive] = useState<ProductCategory | 'all'>('all')

  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <section id="products" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">
            Our Products
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal">
            Tableware from Nature
          </h2>
          <p className="text-stone mt-4 max-w-xl mx-auto">
            100% natural, chemical-free, biodegradable tableware in 15+ sizes and shapes.
            Direct from our factory in Tumakuru, Karnataka.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="relative px-5 py-2 rounded-full font-sans text-sm font-medium transition-colors"
              style={{
                color: active === cat.id ? '#fff' : '#1A3D2B',
                backgroundColor: active === cat.id ? '#1A3D2B' : 'transparent',
                border: '1.5px solid #1A3D2B',
              }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
