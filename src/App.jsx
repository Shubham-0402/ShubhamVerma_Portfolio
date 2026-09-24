import Navigation from './components/Navigation'
import Background from './components/Background'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Education from './components/Education'
import Development from './components/Development'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { marquee } from './data/portfolioData'
import './App.css'

export default function App() {
  return (
    <div className="site">
      <Background />
      <Navigation />
      <main className="site-main">
        <Hero />
        <Marquee words={marquee.words} label="currently exploring" />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experiments />
        <Education />
        <Development />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}