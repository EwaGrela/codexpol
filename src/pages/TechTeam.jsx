import { useTranslation } from 'react-i18next'
import tomekImg from '../assets/new_team_characters/tomek.png'
import ewaImg from '../assets/new_team_characters/ewa.png'
import filipImg from '../assets/new_team_characters/filip.png'
import damianImg from '../assets/new_team_characters/damian.png'
import tatianaImg from '../assets/new_team_characters/tatiana.png'
import haniaImg from '../assets/new_team_characters/hania_focused.png'

const PORTRAITS = {
  tomek:   tomekImg,
  ewa:     ewaImg,
  hania:   haniaImg,
  filip:   filipImg,
  damian:  damianImg,
  tatiana: tatianaImg,
}

function TechCard({ data }) {
  return (
    <div className="tech-card">
      <div className="tech-portrait">
        <img src={PORTRAITS[data.key]} alt={data.name} />
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

export default function TechTeam() {
  const { t } = useTranslation()
  const members = ['tomek', 'ewa', 'hania', 'filip', 'damian', 'tatiana'].map(key => ({
    key,
    ...t(`team.${key}`, { returnObjects: true }),
  }))

  return (
    <div className="tech-page">
      <header className="tech-header">
        <h1>Tech Team</h1>
        <p className="tech-sub">Ludzie, którzy to wszystko piszą. I testują. I nie śpią.</p>
      </header>

      <div className="tech-grid">
        {members.map(m => <TechCard key={m.key} data={m} />)}
      </div>
    </div>
  )
}
