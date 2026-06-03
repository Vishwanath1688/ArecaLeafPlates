import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BLOG_POSTS } from '../../data/blogPosts'

export function BlogPreview() {
  const navigate = useNavigate()
  const posts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="blog" className="py-20 md:py-32 bg-purewhite">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">
              From Our Blog
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
              Insights & Industry News
            </h2>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="font-sans text-sm font-semibold text-[#2D6A2D] hover:underline shrink-0"
          >
            View All Posts →
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <motion.article
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {/* Cover image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-5 bg-cream">
                  <motion.img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-sans text-xs text-stone">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-charcoal leading-snug mb-2 group-hover:text-[#2D6A2D] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-stone leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <p className="font-sans text-xs text-[#2D6A2D] font-semibold mt-3 group-hover:underline">
                  Read More →
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
