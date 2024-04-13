import style from '../DevInfo.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

interface DevInfoLinkContentProps {
  title: string;
  link: string;
}

function DevInfoLinkContent({title, link}: DevInfoLinkContentProps) {

  function handleIcon(): IconDefinition {
    switch (title) {
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

  return (
    <div className={style.linkElement}>
      <FontAwesomeIcon icon={handleIcon()} />
      <a className={style.link} href={link} target="_blank">{title}</a>
    </div>
  )
}

export default DevInfoLinkContent;