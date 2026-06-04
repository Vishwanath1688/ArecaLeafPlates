import { BUSINESS } from '../../data/business'
import { Icon } from '../ui/Icon'

export function Footer() {
  return (
    <footer className="bg-[#0f2318] text-white/80 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand + Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="SKE" className="h-12 w-auto object-contain brightness-0 invert opacity-80" />
              <h3 className="font-display text-lg font-semibold text-white leading-tight">
                Sri Kalleshwara<br />Enterprises
              </h3>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-3">{BUSINESS.tagline}</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">GST Registered · Made in Karnataka, India</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-widest text-xs mb-3 sm:mb-4">Find Us</h4>
            <div className="flex gap-3 mb-3">
              <Icon name="location_on" size={16} className="text-[#7FB069] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed text-white/70">{BUSINESS.address.full}</p>
            </div>
            <div className="flex gap-3 mb-2">
              <Icon name="call" size={16} className="text-[#7FB069] shrink-0" />
              <a href={BUSINESS.whatsappUrl} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                {BUSINESS.whatsapp}
              </a>
            </div>
            <div className="flex gap-3">
              <Icon name="mail" size={16} className="text-[#7FB069] shrink-0" />
              <a href={`mailto:${BUSINESS.email}`} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors break-all">
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-widest text-xs mb-3 sm:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['#products', '#about', '#export', '#blog', '#contact'].map(href => (
                <button key={href}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors text-left capitalize">
                  {href.replace('#', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-widest text-xs mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                <Icon name="photo_camera" size={16} className="text-[#7FB069]" /> Instagram
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                <Icon name="thumb_up" size={16} className="text-[#7FB069]" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Sri Kalleshwara Enterprises. All rights reserved.</p>
          <p className="text-xs text-white/30">100% Natural · 100% Biodegradable · Direct from Factory</p>
        </div>
      </div>
    </footer>
  )
}
