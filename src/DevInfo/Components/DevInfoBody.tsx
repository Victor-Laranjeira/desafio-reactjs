import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
import DevInfoCard from './DevInfoCard';
import { faStar } from '@fortawesome/free-regular-svg-icons';

interface DevInfoCardProps {
  title: string;
  bio: string;
  stars: string;
  updated: string;
}

function DevInfoBody({
  title,
  bio,
  stars,
  updated
}: DevInfoCardProps) {
  return (
    <div className={style.body}>
      <div className={style.card}>
        <p className={style.cardTitle}>{title}</p>
        <p className={style.cardBio}>{bio}</p>
        <div className={style.cardFooter}>
          <p>
            <FontAwesomeIcon icon={faStar} />
            {stars} stars
          </p>
          <span className={style.dot} />
          <p>{updated}</p>
        </div>
      </div>
    </div>
  )
}

export default DevInfoBody;