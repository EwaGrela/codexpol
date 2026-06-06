import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import ProductStrip from './sections/ProductStrip'
import TrustStrip from './sections/TrustStrip'
import Footer from './sections/Footer'
import Testimonials from './sections/Testimonials'
import About from './pages/About'
import Team from './pages/Team'
import HrTeam from './pages/HrTeam'
import TechTeam from './pages/TechTeam'
import Products from './pages/Products'
import Games from './pages/Games'
import Podroz from './pages/Podroz'
import Wczasy from './pages/Wczasy'
import Trypolis from './pages/Trypolis'
import Zarzad from './pages/Zarzad'
import Soon from './pages/Soon'
import Zapora from './pages/Zapora'
import Legacy from './pages/Legacy'
import SigmaFk from './pages/SigmaFk'
import Hermes from './pages/Hermes'
import Teczka95 from './pages/Teczka95'
import KomBit from './pages/KomBit'
import Vatowiec from './pages/Vatowiec'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
    </>
  )
}

function Home() {
  const { t } = useTranslation()
  return (
    <>
      <main>
        <Hero />
        <ProductStrip />
        <TrustStrip />
        <section className="home-about">
          <p>{t('homeAbout.p1')}</p>
          <p>{t('homeAbout.p2')}</p>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"         element={<Home />} />
          <Route path="/o-nas"    element={<About />} />
          <Route path="/zespol"   element={<Team />} />
          <Route path="/kadry"    element={<HrTeam />} />
          <Route path="/tech"     element={<TechTeam />} />
          <Route path="/zarzad"   element={<Zarzad />} />
          <Route path="/produkty" element={<Products />} />
          <Route path="/gry"        element={<Games />} />
          <Route path="/gry/podroz" element={<Podroz />} />
          <Route path="/gry/wczasy"   element={<Wczasy />} />
          <Route path="/gry/trypolis" element={<Trypolis />} />
          <Route path="/wkrotce"    element={<Soon />} />
          <Route path="/zapora"     element={<Zapora />} />
          <Route path="/legacy"     element={<Legacy />} />
          <Route path="/sigma-fk"   element={<SigmaFk />} />
          <Route path="/hermes"     element={<Hermes />} />
          <Route path="/teczka95"   element={<Teczka95 />} />
          <Route path="/kom-bit"    element={<KomBit />} />
          <Route path="/vatowiec"   element={<Vatowiec />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
