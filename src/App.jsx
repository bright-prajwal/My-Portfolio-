import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Collaborate from './components/Collaborate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative" style={{ zIndex: 10, position: 'relative', backgroundColor: 'transparent' }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Collaborate />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
