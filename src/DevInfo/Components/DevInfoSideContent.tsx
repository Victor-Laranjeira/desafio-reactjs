import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
import { faBuilding, faEnvelope, faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import DevInfoLinkContent from './DevInfoLinkContent';
import { faLink, faLocationDot, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface DevInfoSideContentProps {
  name?: string;
  login?: string;
  bio?: string;
  followers?: string;
  following?: string;
  stars?: string;
}

// <FontAwesomeIcon icon={faHeart} />
// <FontAwesomeIcon icon={faPeopleGroup} />
// <FontAwesomeIcon icon={faStar} />

function DevInfoSideContent({
  name = 'Victor Laranjeira',
  login = '@Victor-Laranjeira',
  bio = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  followers = '150',
  following = '200',
  stars = '100',
}: DevInfoSideContentProps) {
  return (
    <div className={style.sideContent}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>{name}</h1>
        <h4 className={style.subTitle}>{login}</h4>
      </div>
      <p className={style.userBio}>{bio}</p>
      <div className={style.stats}>
        <div >
          <FontAwesomeIcon icon={faHeart} />
          <p>{followers}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <p>{following}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          <p>{stars}</p>
        </div>
      </div>
      <DevInfoLinkContent title='organization' link=''>
        <FontAwesomeIcon icon={faBuilding} />
      </DevInfoLinkContent>
      <DevInfoLinkContent title='location' link=''>
        <FontAwesomeIcon icon={faLocationDot} />
      </DevInfoLinkContent>
      <DevInfoLinkContent title='email' link=''>
        <FontAwesomeIcon icon={faEnvelope} />
      </DevInfoLinkContent>
      <DevInfoLinkContent title='website' link=''>
        <FontAwesomeIcon icon={faLink} />
      </DevInfoLinkContent>
      <DevInfoLinkContent title='twitter' link=''>
        <FontAwesomeIcon icon={faTwitter} />
      </DevInfoLinkContent>
    </div>
  )
}

export default DevInfoSideContent;