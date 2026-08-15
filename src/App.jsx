import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PortfolioGrid from './components/PortfolioGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TravelingImage from './components/TravelingImage'

function App() {
  return (
    <>
      <TravelingImage />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PortfolioGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
