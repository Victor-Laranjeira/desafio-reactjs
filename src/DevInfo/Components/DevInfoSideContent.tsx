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
  organization: string;
  blog: string;
  email: string;
  twitter: string;
  location: string;
}

function DevInfoSideContent({
  name,
  login,
  bio,
  followers,
  following,
  stars,
  image_url,
  organization,
  blog,
  email,
  twitter,
  location,
}: DevInfoSideContentProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/home')
  }

  function teste(): boolean {
    if (twitter) {
      return true
    }
    return false
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
        <DevInfoLinkContent type='organization' title={organization} />
        <DevInfoLinkContent type='location' title={location} />
        <DevInfoLinkContent type='email' title={email} link={email} />
        <DevInfoLinkContent type='website' title={blog} link={blog} />
        {
          teste() 
          ? <DevInfoLinkContent type='twitter' title={`@${twitter}`}  link={`https://www.twitter.com/${twitter}`} />
          : <DevInfoLinkContent type='twitter' title='email' /> 
        }
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