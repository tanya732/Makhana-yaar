import { motion } from 'framer-motion'
import { Sprout, ScrollText, Waves, Flame, GraduationCap } from 'lucide-react'
import { facts, didYouKnow } from '../data.js'
import { Lotus } from './Doodles.jsx'

const icons = { Sprout, ScrollText, Waves, Flame }

export default function Learn() {
  return (
    <section id="learn" className="relative overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" />
      <Lotus className="pointer-events-none absolute -right-8 top-24 w-48 text-navy/[0.07] sm:w-64" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange backdrop-blur">
            <GraduationCap size={14} /> Makhana 101
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
            Wait — what <em className="not-italic text-gradient">is</em> a fox nut?
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Most people snack on makhana without ever knowing its story. Here’s the quick,
            genuinely fascinating version.
          </p>
        </div>

        {/* Explainer cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {facts.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex gap-5 rounded-2xl border border-navy/10 bg-white/70 p-6 backdrop-blur transition-colors hover:border-orange/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{f.q}</h3>
                  <p className="mt-2 text-navy/60">{f.a}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Did you know — stat band */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl border border-navy/10 bg-white/70 p-8 backdrop-blur"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy/40">
            Did you know?
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {didYouKnow.map((d) => (
              <div key={d.label} className="text-center">
                <p className="font-display text-3xl font-bold tracking-tight text-orange sm:text-4xl">
                  {d.stat}
                </p>
                <p className="mt-1 text-sm font-medium text-navy/55">{d.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
