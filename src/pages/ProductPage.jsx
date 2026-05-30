import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Testimonials from '../sections/Testimonials'

export default function ProductPage({ productKey, logo, testimonialsKey }) {
  const { t } = useTranslation()
  const data = t(`products.items.${productKey}`, { returnObjects: true })

  return (
    <div className="subpage product-page">
      <header className="subpage-header">
        <Link to="/produkty" state={{ product: productKey }} className="subpage-back">← {t('products.title')}</Link>
        <h1>{data.name}</h1>
        <p className="subpage-sub">{data.tagline}</p>
      </header>

      <div className="product-page-body">
        <div className="product-page-logo-wrap">
          <img src={logo} alt={data.name} className="product-page-logo" />
        </div>
        <p className="product-page-desc">{data.desc}</p>
      </div>

      {testimonialsKey && <Testimonials productKey={testimonialsKey} />}
    </div>
  )
}
