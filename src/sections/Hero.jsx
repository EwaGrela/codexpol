import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="retro-badge">
        CODEXPOL.EXE v1989.0 <span className="retro-cursor" />
      </div>
      <h1>
        <span className="hero-line1">{t('hero.headline')}</span>
        {t('hero.headline2')}
      </h1>
      <p className="hero-sub">{t('hero.sub')}</p>
    </section>
  )
}
