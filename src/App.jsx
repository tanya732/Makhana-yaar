import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Products from './components/Products.jsx'
import Learn from './components/Learn.jsx'
import Benefits from './components/Benefits.jsx'
import Journey from './components/Journey.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Learn />
        <Benefits />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
