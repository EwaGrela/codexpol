import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import History from './sections/History'
import Team from './sections/Team'
import Services from './sections/Services'
import Footer from './sections/Footer'
import TechTeam from './pages/TechTeam'
import './App.css'

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <History />
        <Team />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechTeam />} />
      </Routes>
    </BrowserRouter>
  )
}
