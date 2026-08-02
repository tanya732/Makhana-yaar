import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import { Boat, Waves } from './Doodles.jsx'

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'makhanayaar@gmail.com'
// wa.me needs international format, digits only (no +, spaces, or leading 0)
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '918802248503'
const WHATSAPP_MESSAGE = 'Hi Makhana Yaar! I would like to know more about your makhana.'

const channels = [
  {
    icon: MessageCircle,
    label: 'Chat on WhatsApp',
    desc: 'Quickest way to reach us for bulk orders, questions, anything.',
    action: 'Open WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email us',
    desc: EMAIL,
    action: 'Send an email',
    href: `mailto:${EMAIL}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sand to-cream py-24 bg-grain">
      <Boat className="pointer-events-none absolute right-6 top-16 w-28 text-navy/[0.15] sm:w-36" />
      <Waves className="pointer-events-none absolute inset-x-0 top-40 h-8 w-full text-navy/[0.12]" />
      <div className="relative mx-auto max-w-4xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-orange">Say Hello</p>
          <h2 className="mt-2 font-display text-4xl font-black text-navy sm:text-5xl text-balance">
            Let's be yaars
          </h2>
          <p className="mt-4 text-navy/70">
            Questions, bulk orders, or just want to share the makhana love? Reach us directly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-3xl bg-white/80 p-8 shadow-[0_20px_50px_-30px_rgba(74,50,34,0.5)] ring-1 ring-navy/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:ring-orange/30"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-cream">
                <c.icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{c.label}</h3>
              <p className="mt-1.5 flex-1 text-navy/60">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-orange">
                {c.action}
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-2.5 text-navy/60"
        >
          <MapPin size={18} className="text-orange" />
          <span className="font-medium">Darbhanga, Bihar, India</span>
        </motion.div>
      </div>
    </section>
  )
}
