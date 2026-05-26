import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_codexpol.png'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Codexpol" height="32" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/o-nas">{t('nav.about')}</Link></li>
        <li><Link to="/produkty">{t('nav.products')}</Link></li>
        <li><Link to="/zespol">{t('nav.team')}</Link></li>
        <li><a href="#wkrotce" className="nav-cta">{t('nav.soon')}</a></li>
      </ul>
      <button className="lang-toggle" onClick={toggle}>{t('nav.lang')}</button>
    </nav>
  )
}
