import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function About() {
  const { t } = useTranslation()
  const events = t('history.events', { returnObjects: true })

  return (
    <div className="subpage">
      <header className="subpage-header">
        <Link to="/" className="subpage-back">← Codexpol</Link>
        <h1>{t('about.title')}</h1>
        <p className="subpage-sub">{t('about.sub')}</p>
      </header>

      <div className="about-timeline-wrap">
        <p className="section-label">{t('about.historyTitle')}</p>
        <div className="about-timeline">
          {events.map(ev => (
            <div className="about-event" key={ev.year}>
              <span className="about-year">{ev.year}</span>
              <p className="about-event-text">{ev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
