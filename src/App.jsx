import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import ProductStrip from './sections/ProductStrip'
import TeamStrip from './sections/TeamStrip'
import ComingSoon from './sections/ComingSoon'
import Footer from './sections/Footer'
import About from './pages/About'
import Team from './pages/Team'
import HrTeam from './pages/HrTeam'
import TechTeam from './pages/TechTeam'
import Products from './pages/Products'
import Games from './pages/Games'
import './App.css'

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductStrip />
        <TeamStrip />
        <ComingSoon />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/o-nas"    element={<About />} />
        <Route path="/zespol"   element={<Team />} />
        <Route path="/kadry"    element={<HrTeam />} />
        <Route path="/tech"     element={<TechTeam />} />
        <Route path="/produkty" element={<Products />} />
        <Route path="/gry"      element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
}
