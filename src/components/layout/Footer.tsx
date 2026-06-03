import { MapPin, Phone } from 'lucide-react'
import { BUSINESS } from '../../data/business'

export function Footer() {
  return (
    <footer className="bg-[#0f2318] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Sri Kalleshwara<br />Enterprises
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {BUSINESS.tagline}
            </p>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              GST Registered · Made in Karnataka, India
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans font-semibold text-white uppercase tracking-widest text-xs mb-4">
              Find Us
            </h4>
            <div className="flex gap-3 mb-3">
              <MapPin size={16} className="text-[#7FB069] mt-0.5 shrink-0" />
              <p className="text-sm leading-relaxed text-white/70">{BUSINESS.address.full}</p>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-[#7FB069] shrink-0" />
              <a href={BUSINESS.whatsappUrl} className="text-sm text-white/70 hover:text-white transition-colors">
                {BUSINESS.whatsapp}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-semibold text-white uppercase tracking-widest text-xs mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors">
                📸 Instagram
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors">
                📘 Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sri Kalleshwara Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            100% Natural · 100% Biodegradable · Direct from Factory
          </p>
        </div>
      </div>
    </footer>
  )
}
