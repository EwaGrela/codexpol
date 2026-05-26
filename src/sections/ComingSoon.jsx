import { useTranslation } from 'react-i18next'

export default function ComingSoon() {
  const { t } = useTranslation()

  return (
    <section className="coming-soon" id="wkrotce">
      <p className="section-label coming-soon-label">{t('soon.label')}</p>
      <h2 className="coming-soon-title">{t('soon.title')}</h2>
      <p className="coming-soon-sub">{t('soon.sub')}</p>
      <p className="coming-soon-built">{t('soon.built')}</p>
      <span className="coming-soon-note">{t('soon.note')}</span>
    </section>
  )
}
