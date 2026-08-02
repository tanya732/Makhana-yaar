import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Learn', href: '#learn' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-navy/10 bg-cream/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl font-black text-navy">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-cream">M</span>
          Makhana <span className="text-orange">Yaar</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-semibold text-navy/80 transition-colors hover:text-orange after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#products"
              className="rounded-xl bg-navy px-5 py-2.5 font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-soft"
            >
              Shop Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="mx-4 mb-4 space-y-1 rounded-2xl bg-cream p-4 shadow-xl">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-semibold text-navy hover:bg-sand"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-orange px-4 py-3 text-center font-bold text-cream"
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
