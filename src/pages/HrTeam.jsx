import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bozenkaImg from '../assets/personas/bozenka.png'
import martaImg from '../assets/personas/marta.png'
import julkaImg from '../assets/personas/julka2.png'

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

export default function HrTeam() {
  const { t } = useTranslation()
  const bozena = t('team.bozena', { returnObjects: true })
  const marta  = t('team.marta',  { returnObjects: true })
  const julka  = t('team.julka',  { returnObjects: true })
  const hania  = t('team.hania',  { returnObjects: true })

  return (
    <div className="tech-page">
      <header className="tech-header">
        <Link to="/" className="tech-back">← Codexpol</Link>
        <h1>Kadry</h1>
        <p className="tech-sub">Ludzie, którzy pilnują, żeby wszystko działało. Nie tylko software.</p>
      </header>

      <div className="tech-grid">
        <TeamCard data={bozena} img={bozenkaImg} />
        <TeamCard data={marta}  img={martaImg} />
        <TeamCard data={julka}  img={julkaImg} />
      </div>

      <div className="hania-wrap" style={{ maxWidth: '1080px', margin: '32px auto 80px', padding: '0 24px' }}>
        <div className="hania-card">
          <div className="avatar" style={{ '--avatar-color': '#6b8c6e' }}>H</div>
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
