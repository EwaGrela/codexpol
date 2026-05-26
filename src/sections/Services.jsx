import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  return (
    <section className="services" id="services">
      <p className="section-label">{t('services.title')}</p>
      <div className="services-grid">
        <div className="service-col">
          <span className="service-badge">{t('services.office.badge')}</span>
          <div className="service-label">{t('services.office.label')}</div>
          <p className="service-text">{t('services.office.text')}</p>
        </div>
        <div className="service-col featured">
          <span className="service-badge">{t('services.skillIssue.badge')}</span>
          <div className="service-label">{t('services.skillIssue.label')}</div>
          <p className="service-text">{t('services.skillIssue.text')}</p>
          <a href="#origin" className="service-cta">
            {t('services.skillIssue.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
