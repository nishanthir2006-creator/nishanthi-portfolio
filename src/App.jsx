import './App.css'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Menu from './components/Menu'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import CertificateVault from './sections/CertificateVault'
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function PlaceholderSection({ id, number, title }) {
  return (
    <section id={id} className="placeholder-section">

      <span className="placeholder-number">
        {number}
      </span>

      <h2>
        {title}
      </h2>

    </section>
  )
}

function App() {
  return (
    <main className="portfolio">

      <Menu />

      <Hero />

      <About />

<Education />

<Skills />
<Projects />
<CertificateVault />
<Experience />
<Contact />
    </main>
  )
}

export default App