import { useTranslation } from 'react-i18next'

export default function Testimonials({ productKey = 'home' }) {
  const { t } = useTranslation()
  const items = t(`testimonials.${productKey}.items`, { returnObjects: true })

  return (
    <section className="testimonials">
      <p className="section-label">{t('testimonials.label')}</p>
      <div className={`testimonials-grid testimonials-grid--${Array.isArray(items) ? items.length : 1}`}>
        {Array.isArray(items) && items.map((item, i) => (
          <blockquote className="testimonial-card" key={i}>
            <p className="testimonial-quote">{item.quote}</p>
            <footer className="testimonial-attribution">
              <span className="testimonial-name">{item.name}</span>
              <span className="testimonial-meta">{item.role}, {item.org}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
