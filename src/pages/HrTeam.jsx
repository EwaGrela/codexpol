import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import bozenkaImg from '../assets/personas/bozenka.png'
import martaImg from '../assets/personas/marta.png'
import julkaImg from '../assets/personas/julka2.png'
import haniaImg from '../assets/new_team_characters/hania.png'

function TeamCard({ data, img }) {
  return (
    <div className="tech-card">
      <div className="tech-portrait">
        <img src={img} alt={data.name} />
      </div>
      <div className="tech-card-body">
        <div className="team-name">{data.name}</div>
        <div className="team-role">{data.title}</div>
        <div className="team-since">{data.since}</div>
        <p className="team-bio">{data.bio}</p>
        <blockquote className="team-quote">„{data.quote}"</blockquote>
      </div>
    </div>
  )
}

function MysteryCard({ data }) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) {
    return (
      <div className="tech-card mystery-revealed">
        <div className="tech-portrait">
          <img src={haniaImg} alt={data.name} />
        </div>
        <div className="tech-card-body">
          <div className="team-name">{data.name}</div>
          <div className="team-role">{data.title}</div>
          <div className="team-since">{data.since}</div>
          <p className="team-bio">{data.bio}</p>
          <blockquote className="team-quote">„{data.quote}"
            <cite className="team-quote-attr">{data.attribution}</cite>
          </blockquote>
        </div>
      </div>
    )
  }

  return (
    <button className="tech-card mystery-card" onClick={() => setRevealed(true)}>
      <div className="tech-portrait mystery-portrait">
        <span className="mystery-q">?</span>
      </div>
      <div className="tech-card-body">
        <div className="team-name mystery-name">??? ???</div>
        <div className="team-role">????????????????</div>
        <div className="team-since">W Codexpolu od ????</div>
        <p className="team-bio mystery-hint">Coś tu nie gra.</p>
      </div>
    </button>
  )
}

export default function HrTeam() {
  const { t } = useTranslation()
  const bozena = t('team.bozena', { returnObjects: true })
  const marta  = t('team.marta',  { returnObjects: true })
  const julka  = t('team.julka',  { returnObjects: true })
  const hania  = t('team.hania',  { returnObjects: true })

  return (
    <div className="tech-page">
      <header className="tech-header">
        <h1>Kadry</h1>
        <p className="tech-sub">Ludzie, którzy pilnują, żeby wszystko działało. Nie tylko software.</p>
      </header>

      <div className="tech-grid">
        <TeamCard data={bozena} img={bozenkaImg} />
        <TeamCard data={marta}  img={martaImg} />
        <TeamCard data={julka}  img={julkaImg} />
        <MysteryCard data={hania} />
      </div>
    </div>
  )
}
