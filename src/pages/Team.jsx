import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bozenkaImg  from '../assets/personas/bozenka.png'
import martaImg    from '../assets/personas/marta.png'
import julkaImg    from '../assets/personas/julka2.png'
import tomekImg    from '../assets/new_team_characters/tomek.png'
import sylwiaImg   from '../assets/new_team_characters/sylwia.png'
import filipImg    from '../assets/new_team_characters/filip.png'
import damianImg   from '../assets/new_team_characters/damian.png'
import tatianaImg  from '../assets/new_team_characters/tatiana.png'
import haniaImg    from '../assets/new_team_characters/hania.png'
import mariuszImg  from '../assets/new_team_characters/mariusz.png'
import zdzislawImg from '../assets/new_team_characters/zdzislaw.png'

const HR_MEMBERS = [
  { key: 'bozena', src: bozenkaImg },
  { key: 'marta',  src: martaImg },
  { key: 'julka',  src: julkaImg },
]

const TECH_MEMBERS = [
  { key: 'tomek',   src: tomekImg },
  { key: 'sylwia',  src: sylwiaImg },
  { key: 'hania',   src: haniaImg },
  { key: 'filip',   src: filipImg },
  { key: 'damian',  src: damianImg },
  { key: 'tatiana', src: tatianaImg },
]

function MemberCard({ src, name, role }) {
  return (
    <div className="team-overview-card">
      <img src={src} alt={name} className="team-overview-portrait" />
      <div className="team-overview-name">{name}</div>
      <div className="team-overview-role">{role}</div>
    </div>
  )
}

function ZarzadSection({ zdzislaw, mariusz, label, sub, linkText }) {
  return (
    <div className="team-overview-group" id="zarzad">
      <div className="team-overview-group-header">
        <h2 className="team-overview-group-title">{label}</h2>
        <p className="team-overview-group-sub">{sub}</p>
      </div>
      <div className="team-overview-members">
        <MemberCard src={zdzislawImg} name={zdzislaw.name} role={zdzislaw.title} />
        <MemberCard src={mariuszImg}  name={mariusz.name}  role={mariusz.title} />
      </div>
      <Link to="/zarzad" className="team-overview-link">{linkText}</Link>
    </div>
  )
}

function GroupSection({ members, names, title, sub, to, linkText, dark, id }) {
  return (
    <div id={id} className={`team-overview-group${dark ? ' team-overview-group-dark' : ''}`}>
      <div className="team-overview-group-header">
        <h2 className="team-overview-group-title">{title}</h2>
        <p className="team-overview-group-sub">{sub}</p>
      </div>
      <div className="team-overview-members">
        {members.map(({ key, src }) => (
          <MemberCard
            key={key}
            src={src}
            name={names[key]?.name}
            role={names[key]?.title}
          />
        ))}
      </div>
      <Link to={to} className="team-overview-link">{linkText}</Link>
    </div>
  )
}

export default function Team() {
  const { t } = useTranslation()
  const names = t('team', { returnObjects: true })

  return (
    <div className="subpage">
      <header className="subpage-header">
        <h1>{t('teamStrip.label')}</h1>
      </header>

      <nav className="team-jumpnav">
        <a href="#zarzad">{t('teamStrip.zarzadLabel')}</a>
        <a href="#kadry">{t('teamStrip.kadryLabel')}</a>
        <a href="#tech">{t('teamStrip.techLabel')}</a>
      </nav>

      <div className="team-overview">
        <ZarzadSection
          zdzislaw={names.zdzislaw}
          mariusz={names.mariusz}
          label={t('teamStrip.zarzadLabel')}
          sub={t('teamStrip.zarzadSub')}
          linkText={t('teamStrip.zarzadLink')}
        />
        <GroupSection
          id="kadry"
          members={HR_MEMBERS}
          names={names}
          title={t('teamStrip.kadryLabel')}
          sub={t('teamStrip.kadrySub')}
          to="/kadry"
          linkText={t('teamStrip.kadryLink')}
        />
        <GroupSection
          id="tech"
          members={TECH_MEMBERS}
          names={names}
          title={t('teamStrip.techLabel')}
          sub={t('teamStrip.techSub')}
          to="/tech"
          linkText={t('teamStrip.techLink')}
          dark
        />
      </div>
    </div>
  )
}
