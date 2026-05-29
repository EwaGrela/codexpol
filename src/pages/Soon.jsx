import { useTranslation } from 'react-i18next'

export default function Soon() {
  const { t } = useTranslation()
  const features = t('soon.features', { returnObjects: true })

  return (
    <div className="coming-soon">
      <div className="coming-soon-inner">
        <p className="coming-soon-label section-label">{t('soon.label')}</p>
        <h1 className="coming-soon-title">{t('soon.title')}</h1>
        <p className="coming-soon-tagline">{t('soon.tagline')}</p>
        <ul className="coming-soon-features">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <span className="coming-soon-note">{t('soon.note')}</span>
      </div>
    </div>
  )
}
