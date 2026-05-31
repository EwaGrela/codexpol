import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bozenkaImg from '../assets/personas/bozenka.webp'
import martaImg   from '../assets/personas/marta.webp'
import julkaImg   from '../assets/personas/julka2.webp'
import tomekImg   from '../assets/new_team_characters/tomek.webp'
import sylwiaImg  from '../assets/new_team_characters/sylwia.webp'
import filipImg   from '../assets/new_team_characters/filip.webp'
import damianImg  from '../assets/new_team_characters/damian.webp'
import tatianaImg from '../assets/new_team_characters/tatiana.webp'

const HR_MEMBERS = [
  { key: 'bozena',  src: bozenkaImg },
  { key: 'marta',   src: martaImg },
  { key: 'julka',   src: julkaImg },
]

const TECH_MEMBERS = [
  { key: 'tomek',   src: tomekImg },
  { key: 'sylwia',  src: sylwiaImg },
  { key: 'filip',   src: filipImg },
  { key: 'damian',  src: damianImg },
  { key: 'tatiana', src: tatianaImg },
]

function TeamBlock({ members, names, label, sub, to, linkText, dark }) {
  return (
    <div className={`team-block${dark ? ' team-block-dark' : ''}`}>
      <div className="team-block-header">
        <div className="team-block-label">{label}</div>
        <p className="team-block-sub">{sub}</p>
      </div>
      <div className="team-block-members">
        {members.map(({ key, src }) => (
          <div className="team-block-member" key={key}>
            <img src={src} alt={names[key]?.name ?? key} className="team-block-portrait" />
            <div className="team-block-name">{names[key]?.name}</div>
            <div className="team-block-role">{names[key]?.title}</div>
          </div>
        ))}
      </div>
      <Link to={to} className="team-block-link">{linkText}</Link>
    </div>
  )
}

export default function TeamStrip() {
  const { t } = useTranslation()
  const team = t('team', { returnObjects: true })

  return (
    <section className="team-strip" id="zespol">
      <p className="section-label">{t('teamStrip.label')}</p>
      <div className="team-strip-blocks">
        <TeamBlock
          members={HR_MEMBERS}
          names={team}
          label={t('teamStrip.kadryLabel')}
          sub={t('teamStrip.kadrySub')}
          to="/kadry"
          linkText={t('teamStrip.kadryLink')}
        />
        <TeamBlock
          members={TECH_MEMBERS}
          names={team}
          label={t('teamStrip.techLabel')}
          sub={t('teamStrip.techSub')}
          to="/tech"
          linkText={t('teamStrip.techLink')}
          dark
        />
      </div>
    </section>
  )
}
