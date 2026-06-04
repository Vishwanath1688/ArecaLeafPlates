import { MapPin, Phone } from 'lucide-react'
import { BUSINESS } from '../../data/business'

export function Footer() {
  return (
    <footer className="bg-[#0f2318] text-white/80 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
              Sri Kalleshwara<br />Enterprises
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">{BUSINESS.tagline}</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">GST Registered · Made in Karnataka, India</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans font-semibold text-white uppercase tracking-widest text-xs mb-3 sm:mb-4">Find Us</h4>
            <div className="flex gap-3 mb-3">
              <MapPin size={15} className="text-[#7FB069] mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm leading-relaxed text-white/70">{BUSINESS.address.full}</p>
            </div>
            <div className="flex gap-3">
              <Phone size={15} className="text-[#7FB069] shrink-0" />
              <a href={BUSINESS.whatsappUrl} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                {BUSINESS.whatsapp}
              </a>
            </div>
            <div className="flex gap-3 mt-2">
              <span className="text-[#7FB069] text-sm shrink-0">✉</span>
              <a href={`mailto:${BUSINESS.email}`} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors break-all">
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-semibold text-white uppercase tracking-widest text-xs mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer"
                className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">📸 Instagram</a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer"
                className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">📘 Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Sri Kalleshwara Enterprises. All rights reserved.</p>
          <p className="text-xs text-white/30">100% Natural · 100% Biodegradable · Direct from Factory</p>
        </div>
      </div>
    </footer>
  )
}
