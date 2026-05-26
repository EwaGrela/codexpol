import { useTranslation } from 'react-i18next'
import tomekImg from '../assets/new_team_characters/tomek.png'
import ewaImg from '../assets/new_team_characters/ewa.png'
import filipImg from '../assets/new_team_characters/filip.png'
import damianImg from '../assets/new_team_characters/damian.png'
import tatianaImg from '../assets/new_team_characters/tatiana.png'
import haniaImg from '../assets/new_team_characters/hania.png'

const PORTRAITS = {
  tomek: tomekImg,
  ewa: ewaImg,
  filip: filipImg,
  damian: damianImg,
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
  const members = ['tomek', 'ewa', 'filip', 'damian', 'tatiana'].map(key => ({
    key,
    ...t(`team.${key}`, { returnObjects: true }),
  }))
  const hania = t('team.hania', { returnObjects: true })

  return (
    <div className="tech-page">
      <header className="tech-header">
        <h1>Tech Team</h1>
        <p className="tech-sub">Ludzie, którzy to wszystko piszą. I testują. I nie śpią.</p>
      </header>

      <div className="tech-grid">
        {members.map(m => <TechCard key={m.key} data={m} />)}
      </div>

      <div className="hania-wrap" style={{ maxWidth: '1080px', margin: '32px auto 80px', padding: '0 24px' }}>
        <div className="hania-card">
          <img src={haniaImg} alt={hania.name} className="hania-portrait" />
          <div>
            <div className="hania-name">{hania.name}</div>
            <div className="hania-role">{hania.title}</div>
            <blockquote className="hania-quote">
              „{hania.quote}"
              <cite className="hania-attribution">{hania.attribution}</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
