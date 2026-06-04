import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { WA } from '../../data/whatsappMessages'

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'About',    href: '#about' },
  { label: 'Export',   href: '#export' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contact',  href: '#contact' },
]

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{ backgroundColor: scrolled ? 'rgba(250,250,247,0.95)' : 'transparent' }}
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none', boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none' }}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#hero')}
            className="font-display text-base sm:text-lg md:text-xl font-bold leading-tight text-left"
            style={{ color: scrolled ? '#1A3D2B' : '#fff' }}
            whileHover={{ scale: 1.01 }}
          >
            Sri Kalleshwara<span className="hidden sm:inline"><br /></span>
            <span className="text-[#7FB069]"> Enterprises</span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-sans text-sm font-medium transition-colors hover:text-[#2D6A2D]"
                style={{ color: scrolled ? '#1C1C1C' : 'rgba(255,255,255,0.9)' }}
              >
                {link.label}
              </button>
            ))}
            <WhatsAppButton url={WA.hero} label="Enquire Now" size="sm" />
          </div>

          {/* Mobile/tablet hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(v => !v)}
            style={{ color: scrolled ? '#1A3D2B' : '#fff' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile / tablet drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1A3D2B] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-[#7FB069] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
            <WhatsAppButton url={WA.hero} label="Enquire Now" size="lg" className="mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
