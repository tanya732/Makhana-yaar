import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Lotus, FishermenBoat, HarvestHand, RoastPan, MakhanaBowl, MapPin, PondScene, Makhana } from './Doodles.jsx'

const steps = [
  {
    icon: FishermenBoat,
    title: 'From the pond',
    desc: 'Farmers wade into Mithila’s ponds to gather fox-nut seeds by hand.',
  },
  {
    icon: HarvestHand,
    title: 'Hand-harvested',
    desc: 'One of the most labour-intensive crops each seed picked, sun-dried and graded by hand.',
  },
  {
    icon: RoastPan,
    title: 'Slow roasted',
    desc: 'Roasted in small batches until each nut pops into a light, airy puff.',
  },
  {
    icon: MakhanaBowl,
    title: 'Into your bowl',
    desc: 'Sealed fresh and sent from Bihar straight to your snack break.',
  },
]

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
        </div>

        {/* Definition — illustration + lead statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-5"
        >
          {/* Hand-drawn fox-nut bowl */}
          <div className="relative md:col-span-2">
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-56 w-56 rounded-full bg-orange/10 blur-2xl" />
            <div className="relative mx-auto grid max-w-xs place-items-center rounded-3xl border border-navy/10 bg-white/60 p-8 backdrop-blur">
              <MakhanaBowl className="w-full text-navy" />
              {/* scattered seeds */}
              <Makhana className="absolute -left-3 top-6 w-6 text-navy/40 animate-float" />
              <Makhana className="absolute -right-2 bottom-8 w-5 text-navy/30 animate-float-slow" />
              <span className="mt-4 rounded-full bg-navy px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                Euryale ferox
              </span>
            </div>
          </div>

          {/* Definition text */}
          <p className="font-display text-2xl font-medium leading-relaxed text-navy/80 sm:text-3xl md:col-span-3">
            Makhana — also called <span className="text-gradient font-semibold">fox nuts</span> —
            are simply popped lotus seeds: light, crunchy seeds harvested from the{' '}
            <em className="not-italic text-navy">Euryale ferox</em> water lily.
          </p>
        </motion.div>

        {/* Transition into the journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <span className="mx-auto flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            <span className="h-px w-8 bg-orange/40" />
            A little glimpse
            <span className="h-px w-8 bg-orange/40" />
          </span>
          <p className="mt-4 whitespace-nowrap text-sm font-medium italic tracking-tight text-navy/70 sm:text-base md:text-lg">
            Ever wondered how a fox nut is grown, gathered and roasted?
          </p>
        </motion.div>

        {/* From pond to bowl — journey panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 overflow-hidden rounded-3xl bg-navy px-6 py-14 text-cream sm:px-10"
        >
          <PondScene className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-cream/10" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs font-medium tracking-wide text-cream/70">
              <MapPin className="w-3 text-orange-soft" />
              Darbhanga, Bihar · India
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl text-balance">
              From pond to bowl
            </h3>
            <p className="mt-3 text-cream/60">
              Behind every crunchy bite is the patient, back-breaking craft of Bihar’s makhana farmers.
            </p>
          </div>

          <div className="relative mt-14">
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
                    <h4 className="mt-5 font-display text-lg font-semibold text-cream">{s.title}</h4>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cream/60">
                      {s.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
