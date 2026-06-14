import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import GameEngine from '../games/GameEngine'
import { scenes, start, initialFlags } from '../games/podroz-scenes'

export default function Podroz() {
  const { t } = useTranslation()
  return (
    <div className="game-page">
      <div className="game-monitor">
        <div className="game-monitor-titlebar">
          <Link to="/gry" className="game-back">← /gry</Link>
          <span className="game-monitor-title">{t('games.podroz.name')}</span>
          <span className="game-monitor-meta">1991 · {t('games.podroz.copies')}</span>
        </div>
        <div className="game-screen">
          <GameEngine scenes={scenes} start={start} initialFlags={initialFlags} />
        </div>
      </div>
    </div>
  )
}
