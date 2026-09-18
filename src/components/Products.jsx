import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, Clock, Package, ChevronLeft, ChevronRight } from 'lucide-react'
import { products, flavourSizes, comboPacks } from '../data.js'

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }),
}

const TABS = [
  { id: 'flavours', label: 'Flavours' },
  { id: 'combos', label: 'Combo Packs' },
]

// Mobile-only Bootstrap-style carousel
function Carousel({ items, renderItem }) {
  const [[index, dir], setSlide] = useState([0, 0])

  const go = (d) =>
    setSlide(([prev]) => [(prev + d + items.length) % items.length, d])

  const goTo = (i) =>
    setSlide(([prev]) => [i, i > prev ? 1 : -1])

  return (
    <div className="relative sm:hidden overflow-hidden">
      {/* Slide */}
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div
          key={index}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full"
        >
          {renderItem(items[index], index)}
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 top-1/3 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-navy/10 grid place-items-center text-navy"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 top-1/3 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-navy/10 grid place-items-center text-navy"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-navy' : 'w-2 bg-navy/25'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('flavours')

  useEffect(() => {
    if (window.location.hash === '#combos') setActiveTab('combos')
    const onHashChange = () => {
      if (window.location.hash === '#combos') setActiveTab('combos')
      if (window.location.hash === '#products') setActiveTab('flavours')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const renderFlavourCard = (p) => {
    const off = Math.round((1 - flavourSizes[0].price / flavourSizes[0].mrp) * 100)
    return (
      <motion.article
        variants={card}
        initial="hidden"
        animate="show"
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_18px_50px_-30px_rgba(30,42,74,0.5)]"
      >
        <div className="relative h-52 overflow-hidden bg-white">
          {p.image ? (
            <img
              src={p.image}
              alt={`Makhana Yaar ${p.name} makhana`}
              className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
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
  }

  const renderComboCard = (p) => {
    const off = Math.round((1 - p.price / p.mrp) * 100)
    return (
      <motion.article
        variants={card}
        initial="hidden"
        animate="show"
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_18px_50px_-30px_rgba(30,42,74,0.5)]"
      >
        <div className="relative h-52 overflow-hidden bg-cream">
          {p.image ? (
            <img
              src={p.image}
              alt={`Makhana Yaar ${p.name}`}
              className="h-full w-full object-cover"
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
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md"
            style={{ background: p.accent }}
          >
            SAVE {off}%
          </span>
          <span className="absolute right-3 top-3 rounded-full border border-navy/10 bg-white/90 px-3 py-1 text-[11px] font-bold text-navy backdrop-blur">
            {p.badge}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
          <ul className="mt-3 space-y-1">
            {p.contents.map((line) => (
              <li key={line} className="flex items-center gap-2 text-xs font-medium text-navy/70">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                <span className="truncate">{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4">
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
  }

  return (
    <section id="products" className="relative overflow-hidden bg-cream py-16">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="mt-10"
            >
              {/* Mobile: slide carousel */}
              <Carousel items={products} renderItem={renderFlavourCard} />

              {/* Desktop: grid */}
              <div className="hidden sm:grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
                {products.map((p) => (
                  <motion.div key={p.id} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    {renderFlavourCard(p)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="combos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="mt-10"
            >
              {/* Mobile: slide carousel */}
              <Carousel items={comboPacks} renderItem={renderComboCard} />

              {/* Desktop: grid */}
              <div className="hidden sm:grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
                {comboPacks.map((p) => (
                  <motion.div key={p.id} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    {renderComboCard(p)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
