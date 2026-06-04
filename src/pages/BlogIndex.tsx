import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import { BLOG_POSTS } from '../data/blogPosts'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function BlogIndex() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm text-stone hover:text-[#2D6A2D] transition-colors mb-10 font-sans"
            >
              <Icon name="arrow_back" size={16} /> Back to Home
            </button>

            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">Blog</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-12">
              Insights & Industry News
            </h1>

            <div className="space-y-10">
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.slug}
                  className="group grid grid-cols-1 md:grid-cols-5 gap-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-video bg-purewhite">
                    <motion.img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-stone font-sans">{post.date} · {post.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-charcoal leading-snug mb-3 group-hover:text-[#2D6A2D] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-stone text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="font-sans text-sm font-semibold text-[#2D6A2D] group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
