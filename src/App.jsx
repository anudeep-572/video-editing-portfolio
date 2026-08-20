import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PortfolioGrid, { PROJECTS, THREED_PROJECTS, LONG_FORM_PROJECTS } from './components/PortfolioGrid'
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
        <PortfolioGrid id="short-form" title={<>Short form<br/>Content</>} projects={PROJECTS} />
        <PortfolioGrid id="long-form" title={<>Long Form<br/>Motion Graphics</>} projects={LONG_FORM_PROJECTS} widescreen />
        <PortfolioGrid id="threed-designing" title={<>3D Animation</>} projects={THREED_PROJECTS} widescreen />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
