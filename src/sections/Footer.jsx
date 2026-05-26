import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <span className="site-footer-logo">Codexpol</span>
          <div className="site-footer-meta">
            <span>{t('footer.address')}</span>
            <span>{t('footer.nip')}</span>
            <span>{t('footer.regon')}</span>
          </div>
        </div>
        <div className="site-footer-divider" />
        <p className="site-footer-copy">{t('footer.copy')}</p>
      </div>
    </footer>
  )
}
