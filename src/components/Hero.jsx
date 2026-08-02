import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, Star, Check } from 'lucide-react'
import { PondScene } from './Doodles.jsx'
import packaging from '../assets/packaging.png'

const pills = ['Roasted, never fried', 'High protein', 'Gluten free', 'Zero cholesterol']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const bowlScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-28"
    >
      {/* Engineering grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade" />

      {/* Gradient-mesh glow */}
      <div className="mesh-blob pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-soft" />
      <div className="mesh-blob pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-orange/60" />
      <div className="mesh-blob pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy/20" />

      {/* Packaging landscape, faint & masked so it reads as texture */}
      <PondScene className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-navy/20 mask-fade sm:h-64" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <motion.div style={{ y, opacity: fade }} className="min-w-0">
          {/* Announcement badge */}
          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 py-1.5 pl-2 pr-4 text-sm font-semibold text-navy shadow-sm backdrop-blur"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-orange px-2.5 py-0.5 text-xs font-bold text-white">
              <Sparkles size={12} /> New
            </span>
            Premium makhana now available
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.03] tracking-tight text-navy sm:text-6xl lg:text-7xl text-balance"
          >
            <span className="text-gradient">Hand-harvested.</span>
            <br />
            Perfectly roasted.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-full sm:max-w-md text-lg leading-relaxed text-navy/60"
          >
            Fox nuts are one of the hardest crops to grow, dived for by hand from the ponds of Bihar.
            Makhana Yaar turns that hard work into a snack worth every bite.
          </motion.p>

          {/* Feature pills */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {pills.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-lg border border-navy/10 bg-white/60 px-3 py-1.5 text-sm font-medium text-navy/80 backdrop-blur"
              >
                <Check size={14} className="text-orange" /> {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#benefits"
              className="group inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-soft"
            >
              Why makhana?
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex items-center gap-3 text-sm text-navy/60"
          >
            <div className="flex -space-x-2">
              {['#E8622A', '#1E2A4A', '#F2854E', '#33406A'].map((c) => (
                <span
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-cream"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div>
              <span className="flex text-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <span className="font-medium">Loved by 10,000+ snackers</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Product showcase */}
        <motion.div style={{ scale: bowlScale }} className="relative mx-auto hidden w-full max-w-md md:block">
          {/* Soft glow behind the card for depth */}
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-orange/25 via-orange-soft/10 to-transparent blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="group relative"
          >
            {/* Framed product card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_40px_80px_-30px_rgba(30,42,74,0.55)] ring-1 ring-navy/10">
              <img
                src={packaging}
                alt="Makhana Yaar packet beside a wooden bowl of roasted makhana"
                className="w-full rounded-[1.6rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Sheen sweep on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>

            {/* Floating glass stat chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-6 top-12 rounded-2xl glass px-4 py-2 shadow-lg ring-1 ring-navy/5"
            >
              <p className="font-display text-xl font-bold text-navy">9.7g</p>
              <p className="text-xs font-medium text-navy/50">protein / 100g</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="absolute -right-6 bottom-24 rounded-2xl glass px-4 py-2 shadow-lg ring-1 ring-navy/5"
            >
              <p className="font-display text-xl font-bold text-orange">0g</p>
              <p className="text-xs font-medium text-navy/50">cholesterol</p>
            </motion.div>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white shadow-xl shadow-navy/30">
              100% Natural · Export grade
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
