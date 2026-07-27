import { motion } from 'framer-motion'

const stats = [
  { value: '10k+', label: 'Happy snackers' },
  { value: '4', label: 'Signature flavours' },
  { value: '9.7g', label: 'Protein / 100g' },
  { value: '4.9★', label: 'Average rating' },
]

export default function TrustBar() {
  return (
    <section className="relative z-10 border-y border-navy/10 bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-navy/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
