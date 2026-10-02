import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  // Inicializa o IntersectionObserver para scroll-reveal em toda a página
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

