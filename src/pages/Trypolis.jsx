import { Link } from 'react-router-dom'
import GameEngine from '../games/GameEngine'
import { scenes, start, initialFlags } from '../games/trypolis-scenes'

export default function Trypolis() {
  return (
    <div className="game-page">
      <div className="game-monitor">
        <div className="game-monitor-titlebar">
          <Link to="/gry" className="game-back">← /gry</Link>
          <span className="game-monitor-title">PRINCE OF TRYPOLIS</span>
          <span className="game-monitor-meta">1992 · 0 kopii</span>
        </div>
        <div className="game-screen">
          <GameEngine scenes={scenes} start={start} initialFlags={initialFlags} />
        </div>
      </div>
    </div>
  )
}
