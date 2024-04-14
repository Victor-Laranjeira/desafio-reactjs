import style from '../DevInfo.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

interface DevInfoLinkContentProps {
  type: string;
  title: string;
  link?: string;
}

function DevInfoLinkContent({type, title, link}: DevInfoLinkContentProps) {
  function handleIcon(): IconDefinition {
    switch (type) {
      case 'organization':
        return(faBuilding)
      case 'location':
        return(faLocationDot)
      case 'email':
        return(faEnvelope)
      case 'website':
        return(faLink)
      case 'twitter':
        return(faTwitter)
      default:
        return(faBuilding)
    }
  }

  function handleTitle(): string {
    if (title) {
      return title;
    }
    return type;
  }

  return (
    <div className={style.linkElement}>
      <FontAwesomeIcon className={style.icon} icon={handleIcon()} />
      {
        link ? (
          <a className={style.link} href={link} target="_blank">{title}</a>
        ) : (
          <p>{handleTitle()}</p>
        )
      }
    </div>
  )
}

export default DevInfoLinkContent;