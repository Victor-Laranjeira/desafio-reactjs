import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../DevInfo.module.css'
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

  function handleUpdatedDate(date: Date): string {
    const currentDateTime =  new Date().getTime();
    const updatedTime = new Date(date).getTime();
    const diffTime = currentDateTime - updatedTime;
    const msInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffTime / msInDay).toString();
    return days;
  }

  return (
    <div className={style.body}>
      {repositoryArray.map((repository: repositoryInfoProps, i: number) => {
        return (
          <div key={i} className={style.card}>
            <button className={style.titleButton}>
              <p className={style.cardTitle}><a href={repository.svn_url} target="_blank">{repository.full_name}</a></p>
            </button>
            <p className={style.cardBio}>{repository.description}</p>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faStar} />
                {repository.stargazers_count} stars
              </p>
              <span className={style.dot} />
              <p>Updated {handleUpdatedDate(repository.updated_at)} days ago</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DevInfoBody;