import { useTranslation } from 'react-i18next'

export default function ComingSoon() {
  const { t } = useTranslation()
  const features = t('soon.features', { returnObjects: true })

  return (
    <section className="coming-soon" id="wkrotce">
      <div className="coming-soon-inner">
        <p className="section-label coming-soon-label">{t('soon.label')}</p>
        <h2 className="coming-soon-title">{t('soon.title')}</h2>
        <p className="coming-soon-tagline">{t('soon.tagline')}</p>
        <ul className="coming-soon-features">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <span className="coming-soon-note">{t('soon.note')}</span>
      </div>
    </section>
  )
}
