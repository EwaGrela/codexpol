import { useTranslation } from 'react-i18next'

export default function Origin() {
  const { t } = useTranslation()

  return (
    <section className="origin" id="origin">
      <div className="origin-inner">
        <p className="section-label">{t('origin.title')}</p>
        <div className="origin-paragraphs">
          <p>{t('origin.p1')}</p>
          <p>{t('origin.p2')}</p>
          <p>{t('origin.p3')}</p>
        </div>
        <blockquote className="origin-pullquote">
          <p className="origin-quote-text">„{t('origin.quote')}"</p>
          <cite className="origin-attribution">{t('origin.attribution')}</cite>
        </blockquote>
        <a href="https://skillissue.codexpol.pl" className="origin-cta">
          {t('origin.cta')}
        </a>
      </div>
    </section>
  )
}
