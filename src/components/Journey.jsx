import { motion } from 'framer-motion'
import { FishermenBoat, HarvestHand, RoastPan, MakhanaBowl, MapPin, PondScene } from './Doodles.jsx'

const steps = [
  {
    icon: FishermenBoat,
    title: 'From the pond',
    desc: 'Farmers wade and dive into Mithila’s ponds to gather fox-nut seeds by hand.',
  },
  {
    icon: HarvestHand,
    title: 'Hand-harvested',
    desc: 'One of the most labour-intensive crops on earth — every seed is picked, sun-dried and graded by hand.',
  },
  {
    icon: RoastPan,
    title: 'Slow roasted',
    desc: 'Traditionally roasted in small batches until each nut pops into a light, airy puff.',
  },
  {
    icon: MakhanaBowl,
    title: 'Into your bowl',
    desc: 'Seasoned, sealed fresh and sent from Bihar straight to your snack break.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-navy py-24 text-cream">
      {/* faint packaging landscape as texture */}
      <PondScene className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-cream/10" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          {/* light location tag */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs font-medium tracking-wide text-cream/70">
            <MapPin className="w-3 text-orange-soft" />
            Darbhanga, Bihar · India
          </span>

          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl text-balance">
            From pond to bowl
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            Behind every crunchy bite is the patient, back-breaking craft of Bihar’s makhana
            farmers. This is the journey your snack takes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cream/25 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur">
                    <Icon className="w-12 text-orange-soft" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-orange text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cream">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cream/60">
                    {s.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
