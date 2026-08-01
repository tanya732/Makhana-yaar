import { motion } from 'framer-motion'
import { Sprout, Flame, Heart } from 'lucide-react'
import { Lotus, MakhanaBowl } from './Doodles.jsx'

const steps = [
  { icon: Sprout, title: 'Sourced with care', desc: 'Hand-picked fox nuts from the ponds of Bihar, where the best makhana grows.' },
  { icon: Flame, title: 'Roasted, not fried', desc: 'Slow-roasted in small batches for that signature airy crunch — zero deep-frying.' },
  { icon: Heart, title: 'Seasoned with love', desc: 'Tossed in bold, all-natural spices. No junk, no nasty preservatives. Ever.' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24">
      <Lotus className="pointer-events-none absolute -right-6 top-16 w-40 text-navy/[0.15] sm:w-56" />
      <MakhanaBowl className="pointer-events-none absolute -left-8 bottom-10 w-40 text-navy/[0.13] sm:w-52" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold uppercase tracking-[0.2em] text-orange">Our Story</p>
          <h2 className="mt-2 font-display text-4xl font-black text-navy sm:text-5xl text-balance">
            From our pond to your pocket
          </h2>
          <p className="mt-5 text-lg text-navy/70">
            Makhana Yaar started with a simple idea — snacking shouldn't mean choosing between
            <em> tasty</em> and <em> healthy</em>. We grew up on makhana at home, and wanted to
            bring that wholesome, nostalgic crunch to snack shelves everywhere.
          </p>
          <p className="mt-4 text-navy/70">
            Today, every packet is a promise: real ingredients, honest roasting, and flavours that
            make you go "one more handful". Because a good yaar always has your back.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-4xl font-black text-orange">100%</p>
              <p className="text-sm font-semibold text-navy/60">Natural ingredients</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-orange">5+</p>
              <p className="text-sm font-semibold text-navy/60">Suta export-grade</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-orange">0</p>
              <p className="text-sm font-semibold text-navy/60">Preservatives</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-start gap-5 rounded-3xl bg-sand/60 p-6 ring-1 ring-navy/5"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange text-cream shadow-lg shadow-orange/30">
                <s.icon size={26} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-navy/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
