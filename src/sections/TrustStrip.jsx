import { useTranslation } from 'react-i18next'

const STATS = ['years', 'products', 'incident']

export default function TrustStrip() {
  const { t } = useTranslation()
  return (
    <section className="trust-strip">
      {STATS.map((key) => (
        <div className="trust-stat" key={key}>
          <span className="trust-number">{t(`trust.${key}.number`)}</span>
          <span className="trust-label">{t(`trust.${key}.label`)}</span>
          <span className="trust-sub">{t(`trust.${key}.sub`)}</span>
        </div>
      ))}
    </section>
  )
}
