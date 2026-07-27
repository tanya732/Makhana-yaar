import { motion } from 'framer-motion'
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
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
            Pick your kind of crunch
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Four handcrafted flavours, roasted to golden perfection. There's a Makhana Yaar for every mood.
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
              {/* Packet */}
              <div
                className="relative mx-auto flex h-52 w-40 flex-col items-center justify-between rounded-[1.4rem] rounded-t-[2.5rem] p-4 text-cream shadow-lg"
                style={{ background: `linear-gradient(160deg, ${p.accent}, ${p.accent}cc)` }}
              >
                <span className="mt-1 rounded-full bg-cream/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {p.weight}
                </span>
                <span className="text-5xl drop-shadow">{p.emoji}</span>
                <div className="text-center">
                  <p className="font-display text-sm font-black leading-tight">Makhana Yaar</p>
                  <p className="text-[11px] font-semibold opacity-90">{p.name}</p>
                </div>
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
