import { motion } from 'framer-motion'
import { ImageIcon, Clock } from 'lucide-react'
import { products } from '../data.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange backdrop-blur">
            Our packets
          </span>
          <h2 className="mt-4 flex flex-wrap items-center justify-center gap-3 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
            Pick your kind of crunch
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              <Clock size={13} /> Coming soon
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Four bold flavours of premium 5+ Suta export-quality makhana are on the way. Packet/Jars are launching shortly, so stay tuned!!
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p) => (
            <motion.article
              key={p.id}
              variants={card}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white/70 p-6 shadow-[0_18px_50px_-30px_rgba(30,42,74,0.5)] backdrop-blur transition-colors hover:border-orange/40"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: p.accent }}
              />
              {/* Packet — placeholder until real photos are ready */}
              {/* TODO: replace this placeholder with the real {p.name} packet image (set `image` in data.js) */}
              <div
                className={`relative mx-auto flex w-40 flex-col items-center justify-center gap-3 overflow-hidden p-4 text-white ${p.image ? '' : 'h-52 rounded-[1.4rem] rounded-t-[2.5rem] p-4 shadow-lg'}`}
                style={p.image ? undefined :{ background: `linear-gradient(160deg, ${p.accent}, ${p.accent}cc)` }}
              >
                {p.image ? (
                  <img src={p.image} alt={`Makhana Yaar ${p.name} packet`} className="block h-auto w-full" />
                ) : (
                  <>
                    <ImageIcon size={34} className="opacity-80" />
                    <span className="rounded-full bg-white/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Coming soon
                    </span>
                  </>
                )}
              </div>

              <h3 className="mt-5 text-center font-display text-xl font-bold text-navy">{p.name}</h3>
              <p className="mt-1 text-center text-sm text-navy/60">{p.tagline}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
