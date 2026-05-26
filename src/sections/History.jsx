import { useTranslation } from 'react-i18next'

export default function History() {
  const { t } = useTranslation()
  const events = t('history.events', { returnObjects: true })

  return (
    <section className="history" id="history">
      <p className="section-label">{t('history.title')}</p>
      <div className="timeline">
        {events.map(ev => (
          <div className="timeline-entry" key={ev.year}>
            <span className="timeline-year">{ev.year}</span>
            <p className="timeline-text">{ev.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
