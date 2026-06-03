import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '../data/blogPosts'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { WA } from '../data/whatsappMessages'
import { createLogger } from '../utils/logger'

const logger = createLogger('BlogPost')

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    logger.warn(`Blog post not found: ${slug}`)
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-cream pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-charcoal mb-4">Post not found</h1>
            <button
              onClick={() => navigate('/blog')}
              className="font-sans text-[#2D6A2D] hover:underline"
            >
              ← Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  logger.info(`Blog post viewed: ${post.slug}`)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 pb-20">
        {/* Hero image */}
        <div className="w-full h-64 md:h-96 overflow-hidden mb-12">
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back */}
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-sm text-stone hover:text-[#2D6A2D] transition-colors mb-8 font-sans"
            >
              <ArrowLeft size={16} /> All Posts
            </button>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-stone font-sans">{post.date} · {post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-10">
              {post.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none font-sans text-charcoal
                [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-charcoal [&_h2]:mt-10 [&_h2]:mb-4
                [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-stone
                [&_strong]:text-charcoal [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* WhatsApp CTA */}
            <div className="mt-14 p-8 bg-[#1A3D2B] rounded-2xl text-center">
              <p className="font-display text-2xl font-bold text-white mb-2">
                Interested in Bulk Supply?
              </p>
              <p className="text-white/70 text-sm mb-6">
                Reach us directly on WhatsApp for pricing, MOQ, and availability.
              </p>
              <WhatsAppButton url={WA.general} label="Enquire on WhatsApp" size="lg" />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
