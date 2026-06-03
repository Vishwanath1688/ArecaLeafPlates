import { motion } from 'framer-motion'
import type { Product } from '../../data/products'

const FALLBACK = 'https://images.unsplash.com/photo-1609942072337-c3370e820005?w=400&q=80'

export function ProductCard({ product }: { product: Product }) {

  return (
    <motion.div
      className="group bg-purewhite rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
      whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
          >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-cream">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK }}
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-[#2D6A2D] text-white text-[10px] font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#2D6A2D] mb-1">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="font-display text-lg font-bold text-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-stone text-sm mb-1">
          {product.sizes.join(' · ')}
        </p>
        {product.variants.length > 0 && product.variants[0] !== 'Standard' && (
          <p className="text-[#2D6A2D] text-xs font-medium mb-3">
            {product.variants.join(' & ')} variants
          </p>
        )}
        <p className="text-stone text-xs mb-4 line-clamp-2">
          {product.useCases.join(', ')}
        </p>

        <motion.a
          href={product.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1A3D2B] transition-colors w-full justify-center"
          whileTap={{ scale: 0.97 }}
        >
          Enquire →
        </motion.a>
      </div>
    </motion.div>
  )
}
