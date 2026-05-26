import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import sigmaImg    from '../assets/CODEXPOL_loga/SIGMA_FK.png'
import hermesImg   from '../assets/CODEXPOL_loga/HERMES.png'
import teczkaImg   from '../assets/CODEXPOL_loga/TECZKA_95.png'
import komBitImg   from '../assets/CODEXPOL_loga/KOM_BIT.png'
import vatowiecImg from '../assets/CODEXPOL_loga/VATOWIEC.png'

const LOGOS = {
  sigmaFk:  sigmaImg,
  hermes:   hermesImg,
  teczka95: teczkaImg,
  komBit:   komBitImg,
  vatowiec: vatowiecImg,
}

const PRODUCT_KEYS = ['sigmaFk', 'hermes', 'teczka95', 'komBit', 'vatowiec']

function ProductSlide({ id, data }) {
  return (
    <div className="product-slide">
      <div className="product-slide-logo">
        <img src={LOGOS[id]} alt={data.name} />
      </div>
      <div className="product-slide-body">
        <div className="product-slide-name">{data.name}</div>
        <div className="product-slide-tagline">{data.tagline}</div>
        <p className="product-slide-desc">{data.desc}</p>
      </div>
    </div>
  )
}

export default function Products() {
  const { t } = useTranslation()
  const items = t('products.items', { returnObjects: true })
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)

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
            <ProductSlide key={id} id={id} data={items[id]} />
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
