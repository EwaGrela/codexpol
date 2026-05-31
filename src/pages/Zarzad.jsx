import { useTranslation } from 'react-i18next'
import mariuszImg  from '../assets/new_team_characters/mariusz_1.webp'
import zdzislawImg from '../assets/new_team_characters/zdzislaw.webp'

function ZarzadCard({ data, img }) {
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

export default function Zarzad() {
  const { t } = useTranslation()
  const zdzislaw = t('team.zdzislaw', { returnObjects: true })
  const mariusz  = t('team.mariusz',  { returnObjects: true })

  return (
    <div className="tech-page">
      <header className="tech-header">
        <h1>{t('zarzadPage.title')}</h1>
        <p className="tech-sub">{t('zarzadPage.sub')}</p>
      </header>

      <div className="tech-grid tech-grid--2col">
        <ZarzadCard data={zdzislaw} img={zdzislawImg} />
        <ZarzadCard data={mariusz}  img={mariuszImg} />
      </div>
    </div>
  )
}
