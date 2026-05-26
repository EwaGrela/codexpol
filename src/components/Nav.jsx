import { useTranslation } from 'react-i18next'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">Codexpol</a>
      <ul className="nav-links">
        <li><a href="#history">{t('nav.history')}</a></li>
        <li><a href="#team">{t('nav.team')}</a></li>
        <li><a href="#services">{t('nav.services')}</a></li>
        <li><a href="https://skillissue.codexpol.pl" className="nav-cta">{t('nav.skillIssue')}</a></li>
      </ul>
      <button className="lang-toggle" onClick={toggle}>{t('nav.lang')}</button>
    </nav>
  )
}
