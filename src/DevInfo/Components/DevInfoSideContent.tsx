import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import DevInfoLinkContent from './DevInfoLinkContent';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface DevInfoSideContentProps {
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  stars: string;
  image_url: string;
}

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
          <p>{followers} followers</p>
        </div>
        <div className={style.stats}>
          <FontAwesomeIcon icon={faHeart} />
          <p>{following} following</p>
        </div>
        <div className={style.stats}>
          <FontAwesomeIcon icon={faStar} />
          <p>{stars} stars</p>
        </div>
      </div>
      <div className={style.linkContainer}>
        <DevInfoLinkContent title='organization' link='' />
        <DevInfoLinkContent title='location' link='' />
        <DevInfoLinkContent title='email' link='' />
        <DevInfoLinkContent title='website' link='' />
        <DevInfoLinkContent title='twitter' link='' />
      </div>
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