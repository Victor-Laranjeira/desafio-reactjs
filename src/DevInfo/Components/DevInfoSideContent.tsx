import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
import { faBuilding, faEnvelope, faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import DevInfoLinkContent from './DevInfoLinkContent';
import { faLink, faLocationDot, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface DevInfoSideContentProps {
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  stars: string;
  image_url: string;
}

// <FontAwesomeIcon icon={faHeart} />
// <FontAwesomeIcon icon={faPeopleGroup} />
// <FontAwesomeIcon icon={faStar} />

function DevInfoSideContent({
  name,
  login,
  bio,
  followers,
  following,
  stars,
  image_url,
}: DevInfoSideContentProps) {
  const navigate = useNavigate()

  useEffect(() => {
    console.log(image_url)

  }, [image_url])

  function handleClick() {
    navigate('/')
  }

  return (
    <div className={style.sideContent}>
      <div className={style.imageContainer}>
        <img className={style.img} src={image_url} alt='Imagem de usuário.' />
      </div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>{name}</h1>
        <h4 className={style.subTitle}>@{login}</h4>
      </div>
      <p className={style.userBio}>{bio}</p>
      <div className={style.statsContainer}>
        <div className={style.stats}>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <p>{followers}</p>
        </div>
        <div className={style.stats}>
          <FontAwesomeIcon icon={faHeart} />
          <p>{following}</p>
        </div>
        <div className={style.stats}>
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
      <button
        className={style.backButton}
        onClick={handleClick}
      >
        Voltar
      </button>
    </div>
  )
}

export default DevInfoSideContent;