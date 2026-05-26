import { useTranslation } from 'react-i18next'
import bozenkaImg from '../assets/personas/bozenka.png'
import martaImg from '../assets/personas/marta.png'
import julkaImg from '../assets/personas/julka2.png'

function Portrait({ src, alt }) {
  return (
    <div className="team-portrait">
      <img src={src} alt={alt} />
    </div>
  )
}

function Avatar({ initial, color }) {
  return (
    <div className="avatar" style={{ '--avatar-color': color }}>
      {initial}
    </div>
  )
}

function TeamCard({ data, img }) {
  return (
    <div className="team-card">
      <Portrait src={img} alt={data.name} />
      <div className="team-card-body">
        <div className="team-name">{data.name}</div>
        <div className="team-role">{data.title}</div>
        <div className="team-since">{data.since}</div>
        <p className="team-bio">{data.bio}</p>
        <blockquote className="team-quote">„{data.quote}"</blockquote>
      </div>
    </div>
  )
}

export default function Team() {
  const { t } = useTranslation()
  const bozena = t('team.bozena', { returnObjects: true })
  const marta  = t('team.marta',  { returnObjects: true })
  const julka  = t('team.julka',  { returnObjects: true })
  const hania  = t('team.hania',  { returnObjects: true })

  return (
    <section className="team-section" id="team">
      <p className="section-label">{t('team.title')}</p>
      <div className="team-grid">
        <TeamCard data={bozena} img={bozenkaImg} />
        <TeamCard data={marta}  img={martaImg} />
        <TeamCard data={julka}  img={julkaImg} />
      </div>
      <div className="hania-wrap">
        <div className="hania-card">
          <Avatar initial="H" color="#6b8c6e" />
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
    </section>
  )
}
