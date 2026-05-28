import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sigmaImg    from '../assets/CODEXPOL_loga/SIGMA_FK.png'
import hermesImg   from '../assets/CODEXPOL_loga/HERMES.png'
import teczkaImg   from '../assets/CODEXPOL_loga/TECZKA_95.png'
import komBitImg   from '../assets/CODEXPOL_loga/KOM_BIT.png'
import vatowiecImg from '../assets/CODEXPOL_loga/VATOWIEC.png'
import zaporaImg   from '../assets/CODEXPOL_loga/zapora.png'
import legacyImg   from '../assets/CODEXPOL_loga/legacy.png'

const LOGOS = [
  { key: 'sigmaFk',  src: sigmaImg },
  { key: 'hermes',   src: hermesImg },
  { key: 'teczka95', src: teczkaImg },
  { key: 'komBit',   src: komBitImg },
  { key: 'vatowiec', src: vatowiecImg },
  { key: 'zapora',   src: zaporaImg },
  { key: 'legacy',   src: legacyImg },
]

export default function ProductStrip() {
  const { t } = useTranslation()
  const items = t('products.items', { returnObjects: true })

  return (
    <section className="product-strip">
      <p className="section-label">{t('productStrip.label')}</p>
      <div className="product-strip-logos">
        {LOGOS.map(({ key, src }) => (
          <div className="product-strip-item" key={key}>
            <img src={src} alt={items[key]?.name ?? key} />
            <span className="product-strip-name">{items[key]?.name}</span>
          </div>
        ))}
      </div>
      <Link to="/produkty" className="product-strip-more">{t('productStrip.more')}</Link>
    </section>
  )
}
