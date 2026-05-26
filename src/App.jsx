import Nav from './components/Nav'
import Hero from './sections/Hero'
import History from './sections/History'
import Team from './sections/Team'
import Services from './sections/Services'
import Origin from './sections/Origin'
import Footer from './sections/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <History />
        <Team />
        <Services />
        <Origin />
      </main>
      <Footer />
    </>
  )
}
