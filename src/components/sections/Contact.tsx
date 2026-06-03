import { MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { BUSINESS } from '../../data/business'
import { WA } from '../../data/whatsappMessages'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black text-charcoal leading-tight">
            Ready to Order?
          </h2>
          <p className="text-stone mt-4 text-lg max-w-md mx-auto">
            Reach us on WhatsApp for the fastest response. Bulk inquiries welcome.
          </p>
        </ScrollReveal>

        <div className="flex justify-center mb-14">
          <WhatsAppButton
            url={WA.general}
            label="Start a WhatsApp Conversation →"
            size="lg"
            className="text-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0}>
            <div className="bg-purewhite rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone size={20} className="text-[#7FB069]" />
              </div>
              <p className="font-sans font-semibold text-charcoal mb-1">WhatsApp</p>
              <a href={BUSINESS.whatsappUrl} className="text-[#2D6A2D] font-medium hover:underline">
                {BUSINESS.whatsapp}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-purewhite rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={20} className="text-[#7FB069]" />
              </div>
              <p className="font-sans font-semibold text-charcoal mb-1">Factory Address</p>
              <p className="text-stone text-sm leading-relaxed">{BUSINESS.address.full}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-purewhite rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-4 text-xl">
                📸
              </div>
              <p className="font-sans font-semibold text-charcoal mb-2">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#2D6A2D] hover:underline">📸 Instagram</a>
                <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#2D6A2D] hover:underline">📘 Facebook</a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Google Maps */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden h-72">
            <iframe
              src="https://maps.google.com/maps?q=Gubbi,+Tumakuru+District,+Karnataka&output=embed&z=10"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Factory location"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
