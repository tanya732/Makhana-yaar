import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, Clock, Package } from 'lucide-react'
import { products, flavourSizes, comboPacks } from '../data.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const TABS = [
  { id: 'flavours', label: 'Flavours' },
  { id: 'combos', label: 'Combo Packs' },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('flavours')

  // Switch to combos tab when #combos hash is used in the URL
  useEffect(() => {
    if (window.location.hash === '#combos') setActiveTab('combos')
    const onHashChange = () => {
      if (window.location.hash === '#combos') setActiveTab('combos')
      if (window.location.hash === '#products') setActiveTab('flavours')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <section id="products" className="relative overflow-hidden bg-cream py-24">
      <span id="combos" className="absolute -top-20" />
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

        {/* Tab toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-md ring-1 ring-navy/10">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  window.history.replaceState(null, '', tab.id === 'combos' ? '#combos' : '#products')
                }}
                className={`relative rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-navy text-cream shadow-sm'
                    : 'text-navy/60 hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'flavours' ? (
            <motion.div
              key="flavours"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
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
                      <span
                        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md"
                        style={{ background: p.accent }}
                      >
                        {off}% OFF
                      </span>
                    </div>

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
          ) : (
            <motion.div
              key="combos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {comboPacks.map((p) => {
                const off = Math.round((1 - p.price / p.mrp) * 100)
                return (
                  <motion.article
                    key={p.id}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_18px_50px_-30px_rgba(30,42,74,0.5)] transition-all hover:shadow-[0_30px_60px_-30px_rgba(30,42,74,0.55)]"
                  >
                    {/* Image panel */}
                    <div className="relative aspect-square overflow-hidden bg-cream">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={`Makhana Yaar ${p.name}`}
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="flex h-full flex-col items-center justify-center gap-3 text-navy/40"
                          style={{ background: `linear-gradient(160deg, ${p.accent}18, ${p.accent}06)` }}
                        >
                          <Package size={40} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Photo soon</span>
                        </div>
                      )}
                      {/* savings badge */}
                      <span
                        className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md"
                        style={{ background: p.accent }}
                      >
                        SAVE {off}%
                      </span>
                      {/* pack badge */}
                      <span className="absolute right-3 top-3 rounded-full border border-navy/10 bg-white/90 px-3 py-1 text-[11px] font-bold text-navy backdrop-blur">
                        {p.badge}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
                      <p className="mt-0.5 text-sm text-navy/55">{p.tagline}</p>

                      {/* Contents list */}
                      <ul className="mt-3 space-y-1">
                        {p.contents.map((line) => (
                          <li key={line} className="flex items-center gap-2 text-xs font-medium text-navy/70">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                            {line}
                          </li>
                        ))}
                      </ul>

                      {/* Price row */}
                      <div className="mt-4">
                        <div className="rounded-xl bg-cream px-3 py-2 text-center ring-1 ring-navy/5">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">Price</p>
                          <p className="font-display text-base font-bold text-navy">
                            ₹{p.price}{' '}
                            <span className="text-xs font-normal text-navy/40 line-through">₹{p.mrp}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
