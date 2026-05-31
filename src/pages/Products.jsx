import { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import sigmaImg    from '../assets/CODEXPOL_loga/SIGMA_FK.webp'
import hermesImg   from '../assets/CODEXPOL_loga/HERMES.webp'
import teczkaImg   from '../assets/CODEXPOL_loga/TECZKA_95.webp'
import komBitImg   from '../assets/CODEXPOL_loga/KOM_BIT.webp'
import vatowiecImg from '../assets/CODEXPOL_loga/VATOWIEC.webp'
import zaporaImg   from '../assets/CODEXPOL_loga/zapora.webp'
import legacyImg   from '../assets/CODEXPOL_loga/legacy.webp'

const LOGOS = {
  sigmaFk:  sigmaImg,
  hermes:   hermesImg,
  teczka95: teczkaImg,
  komBit:   komBitImg,
  vatowiec: vatowiecImg,
  zapora:   zaporaImg,
  legacy:   legacyImg,
}

const PRODUCT_ROUTES = {
  sigmaFk:  '/sigma-fk',
  hermes:   '/hermes',
  teczka95: '/teczka95',
  komBit:   '/kom-bit',
  vatowiec: '/vatowiec',
  zapora:   '/zapora',
  legacy:   '/legacy',
}

const PRODUCT_KEYS = ['sigmaFk', 'hermes', 'teczka95', 'komBit', 'vatowiec', 'zapora', 'legacy']

function ProductSlide({ id, data, t }) {
  const route = PRODUCT_ROUTES[id]
  return (
    <div className="product-slide">
      <div className="product-slide-logo">
        <img src={LOGOS[id]} alt={data.name} />
      </div>
      <div className="product-slide-body">
        <div className="product-slide-name">{data.name}</div>
        <div className="product-slide-tagline">{data.tagline}</div>
        <p className="product-slide-desc">{data.desc}</p>
        {route && (
          <Link to={route} className="product-slide-link">
            {t('products.more')} →
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Products() {
  const { t } = useTranslation()
  const { state } = useLocation()
  const items = t('products.items', { returnObjects: true })
  const initialIndex = state?.product ? Math.max(0, PRODUCT_KEYS.indexOf(state.product)) : 0
  const [current, setCurrent] = useState(initialIndex)
  const trackRef = useRef(null)

  useEffect(() => {
    if (initialIndex > 0 && trackRef.current) {
      trackRef.current.scrollLeft = initialIndex * trackRef.current.offsetWidth
    }
  }, [])

  function goTo(index) {
    setCurrent(index)
    const track = trackRef.current
    if (track) {
      track.scrollTo({ left: index * track.offsetWidth, behavior: 'smooth' })
    }
  }

  function prev() { goTo(Math.max(0, current - 1)) }
  function next() { goTo(Math.min(PRODUCT_KEYS.length - 1, current + 1)) }

  return (
    <div className="subpage">
      <header className="subpage-header">
        <h1>{t('products.title')}</h1>
        <p className="subpage-sub">{t('products.subtitle')}</p>
      </header>

      <div className="slider-wrap">
        <div className="slider-track" ref={trackRef}>
          {PRODUCT_KEYS.map(id => (
            <ProductSlide key={id} id={id} data={items[id]} t={t} />
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-arrow" onClick={prev} disabled={current === 0}>←</button>
          <div className="slider-dots">
            {PRODUCT_KEYS.map((id, i) => (
              <button
                key={id}
                className={`slider-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="slider-arrow" onClick={next} disabled={current === PRODUCT_KEYS.length - 1}>→</button>
        </div>
      </div>

      <p className="products-secret">{t('products.secret')}</p>
    </div>
  )
}
