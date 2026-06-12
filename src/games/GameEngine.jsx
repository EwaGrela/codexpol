import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const COLORS = {
  w: '#f0f0f0',  // white
  c: '#44d8d8',  // cyan
  r: '#d84444',  // red
  g: '#44d844',  // green
  y: '#d8d844',  // yellow
  d: '#888888',  // dim
  a: '#FFB300',  // amber (reset)
}

function ColoredArt({ text }) {
  const segments = []
  let color = '#FFB300'
  let i = 0
  while (i < text.length) {
    if (text[i] === '{' && i + 2 < text.length && text[i + 2] === '}' && COLORS[text[i + 1]]) {
      color = COLORS[text[i + 1]]
      i += 3
      continue
    }
    let j = i + 1
    while (j < text.length) {
      if (text[j] === '{' && j + 2 < text.length && text[j + 2] === '}' && COLORS[text[j + 1]]) break
      j++
    }
    segments.push({ color, text: text.slice(i, j) })
    i = j
  }
  return (
    <pre className="game-art">
      {segments.map((seg, idx) => (
        <span key={idx} style={{ color: seg.color }}>{seg.text}</span>
      ))}
    </pre>
  )
}

export default function GameEngine({ scenes, start, initialFlags = {} }) {
  const { t } = useTranslation()
  const [sceneId, setSceneId] = useState(start)
  const [flags, setFlags] = useState(initialFlags)

  function choose(choice) {
    const newFlags = choice.setsFlag ? { ...flags, ...choice.setsFlag } : flags
    if (choice.setsFlag) setFlags(newFlags)

    let nextId = choice.next
    while (scenes[nextId]?.route) {
      const { flag, true: ifTrue, false: ifFalse } = scenes[nextId].route
      nextId = newFlags[flag] ? ifTrue : ifFalse
    }
    setSceneId(nextId)
  }

  function restart() {
    setSceneId(start)
    setFlags(initialFlags)
  }

  const scene = scenes[sceneId]

  return (
    <div className="game-engine">
      {scene.title && (
        <div className="game-scene-title">{scene.title}</div>
      )}
      {scene.art && (
        <ColoredArt text={scene.art} />
      )}
      {scene.narration && (
        <p className="game-narration">{scene.narration}</p>
      )}
      <div className="game-controls">
        {scene.ending ? (
          <>
            {scene.endingLabel && (
              <div className="game-ending-label">{t(scene.endingLabel)}</div>
            )}
            <button className="game-btn game-btn-restart" onClick={restart}>
              {t('games.ctaRestart')}
            </button>
          </>
        ) : (
          scene.choices.map((choice, i) => (
            <button key={i} className="game-btn" onClick={() => choose(choice)}>
              {t(choice.label)}
            </button>
          ))
        )}
      </div>
    </div>
  )
}
