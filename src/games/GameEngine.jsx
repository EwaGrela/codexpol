import { useState } from 'react'

export default function GameEngine({ scenes, start, initialFlags = {} }) {
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
        <pre className="game-art">{scene.art}</pre>
      )}
      {scene.narration && (
        <p className="game-narration">{scene.narration}</p>
      )}
      <div className="game-controls">
        {scene.ending ? (
          <>
            {scene.endingLabel && (
              <div className="game-ending-label">{scene.endingLabel}</div>
            )}
            <button className="game-btn game-btn-restart" onClick={restart}>
              ↩ Zagraj ponownie
            </button>
          </>
        ) : (
          scene.choices.map((choice, i) => (
            <button key={i} className="game-btn" onClick={() => choose(choice)}>
              {choice.label}
            </button>
          ))
        )}
      </div>
    </div>
  )
}
