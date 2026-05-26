import { useTranslation } from 'react-i18next'

function GameCard({ data }) {
  return (
    <div className="game-card">
      <div className="game-number">{data.number}</div>
      <div className="game-title">{data.name}</div>
      <div className="game-meta">
        <span>{data.year}</span>
        <span className="game-meta-sep">·</span>
        <span>{data.platform}</span>
        <span className="game-meta-sep">·</span>
        <span className="game-copies">{data.copies}</span>
      </div>
      <p className="game-tagline">{data.tagline}</p>
      <p className="game-desc">{data.desc}</p>
      <blockquote className="game-review">
        „{data.review}"
        <cite className="game-review-source">{data.reviewSource}</cite>
      </blockquote>
    </div>
  )
}

export default function Games() {
  const { t } = useTranslation()
  const podroz = t('games.podroz', { returnObjects: true })
  const wczasy = t('games.wczasy', { returnObjects: true })

  return (
    <div className="subpage games-page">
      <header className="subpage-header games-header">
        <h1>{t('games.title')}</h1>
        <p className="subpage-sub">{t('games.subtitle')}</p>
      </header>

      <div className="games-diptych">
        <GameCard data={podroz} />
        <GameCard data={wczasy} />
      </div>

      <p className="games-epilogue">{t('games.epilogue')}</p>
    </div>
  )
}
