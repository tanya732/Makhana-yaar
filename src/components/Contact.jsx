import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { Boat, Waves } from './Doodles.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — just show a friendly confirmation.
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sand to-cream py-24 bg-grain">
      <Boat className="pointer-events-none absolute right-6 top-16 w-28 text-navy/[0.15] sm:w-36" />
      <Waves className="pointer-events-none absolute inset-x-0 top-40 h-8 w-full text-navy/[0.12]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-orange">Say Hello</p>
          <h2 className="mt-2 font-display text-4xl font-black text-navy sm:text-5xl text-balance">
            Let's be yaars
          </h2>
          <p className="mt-4 text-navy/70">
            Questions, bulk orders, or just want to share the makhana love? Drop us a line.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: 'Email us', value: 'hello@makhanayaar.in' },
              { icon: Phone, label: 'Call us', value: '+91 98765 43210' },
              { icon: MapPin, label: 'Visit us', value: 'Darbhanga, Bihar, India' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-5 rounded-2xl bg-white/70 p-5 ring-1 ring-navy/5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/15 text-orange">
                  <c.icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">{c.label}</p>
                  <p className="font-display text-lg font-bold text-navy">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_-28px_rgba(74,50,34,0.5)] ring-1 ring-navy/5"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-bold text-navy">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us what's on your mind…"
                className="w-full resize-none rounded-2xl border-2 border-sand bg-cream/50 px-4 py-3 text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-orange"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange px-6 py-3.5 font-bold text-cream shadow-lg shadow-orange/30 transition-colors hover:bg-navy"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Thanks, we'll be in touch!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-sand bg-cream/50 px-4 py-3 text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-orange"
      />
    </div>
  )
}
