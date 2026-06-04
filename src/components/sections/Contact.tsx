import { ScrollReveal } from '../ui/ScrollReveal'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { Icon } from '../ui/Icon'
import { BUSINESS } from '../../data/business'
import { WA } from '../../data/whatsappMessages'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-cream">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-tight uppercase">
            Ready to Order?
          </h2>
          <p className="text-stone mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-md mx-auto font-sans">
            Reach us on WhatsApp for the fastest response. Bulk inquiries welcome.
          </p>
        </ScrollReveal>

        <div className="flex justify-center mb-10 sm:mb-14">
          <WhatsAppButton url={WA.general} label="Start a WhatsApp Conversation" size="lg" className="w-full sm:w-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-16">
          {[
            { icon: 'call',         label: 'WhatsApp',      content: BUSINESS.whatsapp,  href: BUSINESS.whatsappUrl },
            { icon: 'mail',         label: 'Email',         content: BUSINESS.email,     href: `mailto:${BUSINESS.email}` },
            { icon: 'location_on',  label: 'Factory',       content: BUSINESS.address.full, href: BUSINESS.mapsUrl },
            { icon: 'photo_camera', label: 'Follow Us',     content: null,               href: null },
          ].map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="bg-purewhite rounded-2xl p-5 sm:p-6 text-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon name={card.icon} size={18} className="text-[#7FB069]" />
                </div>
                <p className="font-display font-semibold text-charcoal text-sm sm:text-base mb-1 uppercase tracking-wide">{card.label}</p>
                {card.content && card.href ? (
                  <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[#2D6A2D] font-sans hover:underline text-xs sm:text-sm break-all">
                    {card.content}
                  </a>
                ) : (
                  <div className="flex justify-center gap-4 mt-1">
                    <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#2D6A2D] hover:underline font-sans">Instagram</a>
                    <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#2D6A2D] hover:underline font-sans">Facebook</a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-96">
            <iframe
              src="https://www.google.com/maps?q=Somalapura+Village,+Gubbi+Taluk,+Tumakuru+District,+Karnataka&output=embed&z=14"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Kalleshwara Enterprises — Factory Location"
            />
          </div>
          <div className="text-center mt-3">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-[#2D6A2D] hover:underline inline-flex items-center gap-1">
              <Icon name="open_in_new" size={14} /> Open in Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
