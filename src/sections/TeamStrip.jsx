import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bozenkaImg  from '../assets/personas/bozenka.png'
import martaImg    from '../assets/personas/marta.png'
import julkaImg    from '../assets/personas/julka2.png'
import tomekImg    from '../assets/new_team_characters/tomek.png'
import ewaImg      from '../assets/new_team_characters/ewa.png'
import filipImg    from '../assets/new_team_characters/filip.png'
import damianImg   from '../assets/new_team_characters/damian.png'
import tatianaImg  from '../assets/new_team_characters/tatiana.png'

const HR_AVATARS = [
  { key: 'bozena',  src: bozenkaImg },
  { key: 'marta',   src: martaImg },
  { key: 'julka',   src: julkaImg },
]

const TECH_AVATARS = [
  { key: 'tomek',   src: tomekImg },
  { key: 'ewa',     src: ewaImg },
  { key: 'filip',   src: filipImg },
  { key: 'damian',  src: damianImg },
  { key: 'tatiana', src: tatianaImg },
]

function AvatarRow({ avatars, names }) {
  return (
    <div className="avatar-row">
      {avatars.map(({ key, src }) => (
        <div className="avatar-item" key={key}>
          <img src={src} alt={names[key]?.name ?? key} className="avatar-portrait" />
          <span className="avatar-name">{names[key]?.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function TeamStrip() {
  const { t } = useTranslation()
  const team = t('team', { returnObjects: true })

  return (
    <section className="team-strip">
      <p className="section-label">{t('teamStrip.label')}</p>
      <div className="team-strip-cols">
        <div className="team-strip-col">
          <div className="team-strip-label">{t('teamStrip.kadryLabel')}</div>
          <AvatarRow avatars={HR_AVATARS} names={team} />
          <Link to="/kadry" className="team-strip-link">{t('teamStrip.kadryLink')}</Link>
        </div>
        <div className="team-strip-col">
          <div className="team-strip-label">{t('teamStrip.techLabel')}</div>
          <AvatarRow avatars={TECH_AVATARS} names={team} />
          <Link to="/tech" className="team-strip-link">{t('teamStrip.techLink')}</Link>
        </div>
      </div>
    </section>
  )
}
