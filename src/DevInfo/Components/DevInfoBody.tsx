import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
import DevInfoCard from './DevInfoCard';
import { faStar } from '@fortawesome/free-regular-svg-icons';

interface repositoryInfoProps {
  full_name: string;
  description: string;
  stargazers_count: number;
  svn_url: string;
  updated_at: Date;
}

interface DevInfoCardProps {
  repositoryArray: repositoryInfoProps[];
}

function DevInfoBody({ repositoryArray }: DevInfoCardProps) {
  return (
    <div className={style.body}>
      {repositoryArray.map((repository: repositoryInfoProps, i: number) => {
        console.log(repository)
        return (
          <div key={i} className={style.card}>
            <p className={style.cardTitle}>{repository.full_name}</p>
            <p className={style.cardBio}>{repository.description}</p>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faStar} />
                {repository.stargazers_count} stars
              </p>
              <span className={style.dot} />
              <p>Updated {repository.updated_at.toString()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DevInfoBody;