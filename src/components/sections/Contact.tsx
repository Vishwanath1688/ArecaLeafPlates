import { MapPin, Phone, Mail } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { BUSINESS } from '../../data/business'
import { WA } from '../../data/whatsappMessages'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-cream">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-charcoal leading-tight">
            Ready to Order?
          </h2>
          <p className="text-stone mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
            Reach us on WhatsApp for the fastest response. Bulk inquiries welcome.
          </p>
        </ScrollReveal>

        <div className="flex justify-center mb-10 sm:mb-14">
          <WhatsAppButton url={WA.general} label="Start a WhatsApp Conversation →" size="lg" className="w-full sm:w-auto text-sm sm:text-base lg:text-lg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <ScrollReveal delay={0}>
            <div className="bg-purewhite rounded-2xl p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone size={18} className="text-[#7FB069]" />
              </div>
              <p className="font-sans font-semibold text-charcoal text-sm sm:text-base mb-1">WhatsApp</p>
              <a href={BUSINESS.whatsappUrl} className="text-[#2D6A2D] font-medium hover:underline text-sm sm:text-base">
                {BUSINESS.whatsapp}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-purewhite rounded-2xl p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail size={18} className="text-[#7FB069]" />
              </div>
              <p className="font-sans font-semibold text-charcoal text-sm sm:text-base mb-1">Email</p>
              <a href={`mailto:${BUSINESS.email}`} className="text-[#2D6A2D] font-medium hover:underline text-xs sm:text-sm break-all">
                {BUSINESS.email}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-purewhite rounded-2xl p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin size={18} className="text-[#7FB069]" />
              </div>
              <p className="font-sans font-semibold text-charcoal text-sm sm:text-base mb-1">Factory</p>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="text-stone text-xs sm:text-sm leading-relaxed hover:text-[#2D6A2D] transition-colors">
                {BUSINESS.address.full}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-purewhite rounded-2xl p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl">
                📸
              </div>
              <p className="font-sans font-semibold text-charcoal text-sm sm:text-base mb-2">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#2D6A2D] hover:underline">📸 Instagram</a>
                <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#2D6A2D] hover:underline">📘 Facebook</a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Google Maps — real factory location */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-96">
            <iframe
              src="https://www.google.com/maps?q=Somalapura+Village,+Gubbi+Taluk,+Tumakuru+District,+Karnataka&output=embed&z=14"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Kalleshwara Enterprises — Factory Location"
            />
          </div>
          <div className="text-center mt-3">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-[#2D6A2D] hover:underline">
              Open in Google Maps →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
