import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_codexpol.webp'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={close}>
          <img src={logo} alt="Codexpol" height="40" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/o-nas">{t('nav.about')}</Link></li>
          <li><Link to="/produkty">{t('nav.products')}</Link></li>
          <li><Link to="/zespol">{t('nav.team')}</Link></li>
          <li><Link to="/gry">{t('nav.games')}</Link></li>
          <li><Link to="/wkrotce" className="nav-cta">{t('nav.soon')}</Link></li>
        </ul>
        <button className="lang-toggle" onClick={toggle}>{t('nav.lang')}</button>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>
      {open && (
        <div className="nav-mobile-menu">
          <ul>
            <li><Link to="/o-nas" onClick={close}>{t('nav.about')}</Link></li>
            <li><Link to="/produkty" onClick={close}>{t('nav.products')}</Link></li>
            <li><Link to="/zespol" onClick={close}>{t('nav.team')}</Link></li>
            <li><Link to="/gry" onClick={close}>{t('nav.games')}</Link></li>
            <li><Link to="/wkrotce" className="nav-cta" onClick={close}>{t('nav.soon')}</Link></li>
          </ul>
          <button className="lang-toggle nav-mobile-lang" onClick={() => { toggle(); close() }}>
            {t('nav.lang')}
          </button>
        </div>
      )}
    </>
  )
}
