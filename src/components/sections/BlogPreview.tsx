import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BLOG_POSTS } from '../../data/blogPosts'

export function BlogPreview() {
  const navigate = useNavigate()
  const posts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="blog" className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-purewhite">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 lg:mb-16 gap-4">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">From Our Blog</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Insights & Industry News
            </h2>
          </div>
          <button onClick={() => navigate('/blog')}
            className="font-sans text-sm font-semibold text-[#2D6A2D] hover:underline shrink-0 self-start sm:self-auto">
            View All Posts →
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <motion.article className="group cursor-pointer"
                whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4 sm:mb-5 bg-cream">
                  <motion.img src={post.coverImage} alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-sans text-xs text-stone">{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-snug mb-2 group-hover:text-[#2D6A2D] transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed line-clamp-2">{post.excerpt}</p>
                <p className="font-sans text-xs text-[#2D6A2D] font-semibold mt-3 group-hover:underline">Read More →</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
