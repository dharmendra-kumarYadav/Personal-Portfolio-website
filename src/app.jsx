import { useEffect } from 'preact/hooks'
import Navbar  from './components/navbar'
import Home from './components/home'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Aos from 'aos'
import 'aos/dist/aos.css'


export function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </>

  )
}
