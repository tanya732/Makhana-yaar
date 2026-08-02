import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-black text-cream">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-orange text-cream">M</span>
            Makhana <span className="text-orange-soft">Yaar</span>
          </a>

          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-orange"
                aria-label="social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-cream/10 pt-5 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Makhana Yaar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-orange" fill="currentColor" /> in India · crafted by Tanya
          </p>
        </div>
      </div>
    </footer>
  )
}
