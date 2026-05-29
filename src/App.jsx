import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import ProductStrip from './sections/ProductStrip'
import Footer from './sections/Footer'
import About from './pages/About'
import Team from './pages/Team'
import HrTeam from './pages/HrTeam'
import TechTeam from './pages/TechTeam'
import Products from './pages/Products'
import Games from './pages/Games'
import Podroz from './pages/Podroz'
import Wczasy from './pages/Wczasy'
import './App.css'

function Layout() {
  return (
    <>
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
        <section className="home-about">
          <p>{t('homeAbout.p1')}</p>
          <p>{t('homeAbout.p2')}</p>
        </section>
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
          <Route path="/produkty" element={<Products />} />
          <Route path="/gry"        element={<Games />} />
          <Route path="/gry/podroz" element={<Podroz />} />
          <Route path="/gry/wczasy" element={<Wczasy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
