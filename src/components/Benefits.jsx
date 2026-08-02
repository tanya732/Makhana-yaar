import { motion } from 'framer-motion'
import { Dumbbell, Feather, Wheat, Sparkles, HeartPulse, Leaf, Users } from 'lucide-react'
import { benefits, nutrition } from '../data.js'
import { Lotus, PalmTree } from './Doodles.jsx'

const icons = { Dumbbell, Feather, Wheat, Sparkles, HeartPulse, Leaf, Users }

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-cream to-sand py-24 bg-grain">
      <PalmTree className="pointer-events-none absolute -left-4 top-20 w-24 text-navy/[0.13] sm:w-32" />
      <Lotus className="pointer-events-none absolute -right-8 bottom-16 w-44 text-navy/[0.13] sm:w-56" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-orange">Nutritional Goodness</p>
          <h2 className="mt-2 font-display text-4xl font-black text-navy sm:text-5xl text-balance">
            Snacking that loves you back
          </h2>
          <p className="mt-4 text-navy/70">
            Makhana is one of nature's smartest snacks light, wholesome and packed with the good stuff.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = icons[b.icon]
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-3xl bg-white/70 p-7 shadow-[0_16px_40px_-26px_rgba(74,50,34,0.5)] ring-1 ring-navy/5 backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/15 text-orange">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-navy/70">{b.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Nutrition strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl bg-navy p-8 text-cream shadow-2xl"
        >
          <p className="text-center font-display text-lg font-bold">
            Typical values <span className="text-orange-soft">per 100g</span>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {nutrition.map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-display text-3xl font-black text-orange-soft">{n.value}</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-cream/70">{n.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
