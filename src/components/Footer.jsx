import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'

const cols = [
  { title: 'Shop', links: ['Peri Peri Punch', 'Cream & Onion', 'Himalayan Salt', 'Jaggery Caramel'] },
  { title: 'Company', links: ['Our Story', 'Benefits', 'Blog', 'Careers'] },
  { title: 'Support', links: ['Contact', 'Shipping', 'Returns', 'FAQs'] },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display text-2xl font-black text-cream">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-cream">M</span>
              Makhana <span className="text-orange-soft">Yaar</span>
            </a>
            <p className="mt-4 max-w-xs text-cream/60">
              Crunchy, roasted fox nuts made with love. Snack happy, snack healthy — with your favourite yaar.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-orange"
                  aria-label="social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-lg font-bold text-cream">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-cream/60 transition-colors hover:text-orange-soft">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Makhana Yaar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-orange" fill="currentColor" /> in India
          </p>
        </div>
        <p className="mt-4 text-center text-[10px] leading-none text-cream/30">
          website crafted with love by Tanya
        </p>
      </div>
    </footer>
  )
}
