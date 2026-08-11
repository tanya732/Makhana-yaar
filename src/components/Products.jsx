import { motion } from 'framer-motion'
import { ImageIcon, Clock } from 'lucide-react'
import { products, flavourSizes } from '../data.js'

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
          {products.map((p) => {
            const off = Math.round((1 - flavourSizes[0].price / flavourSizes[0].mrp) * 100)
            return (
              <motion.article
                key={p.id}
                variants={card}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_18px_50px_-30px_rgba(30,42,74,0.5)] transition-all hover:shadow-[0_30px_60px_-30px_rgba(30,42,74,0.55)]"
              >
                {/* Image panel — full-bleed product photo (native 2:3) */}
                <div className="relative aspect-[2/3] overflow-hidden bg-white">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`Makhana Yaar ${p.name} makhana`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full flex-col items-center justify-center gap-3 text-navy/40"
                      style={{ background: `linear-gradient(160deg, ${p.accent}14, ${p.accent}05)` }}
                    >
                      <ImageIcon size={34} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Photo soon</span>
                    </div>
                  )}
                  {/* discount badge */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md"
                    style={{ background: p.accent }}
                  >
                    {off}% OFF
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-navy/55">{p.tagline}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {flavourSizes.map((s) => (
                      <div key={s.size} className="rounded-xl bg-cream px-3 py-2 text-center ring-1 ring-navy/5">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">{s.size}</p>
                        <p className="font-display text-base font-bold text-navy">
                          ₹{s.price}{' '}
                          <span className="text-xs font-normal text-navy/40 line-through">₹{s.mrp}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
