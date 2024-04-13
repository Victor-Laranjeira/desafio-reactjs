import style from '../DevInfo.module.css'

interface DevInfoCardProps {
  title: string;
  bio: string;
  stars: string;
  updated: string;
}

function DevInfoCard({
  title,
  bio,
  stars,
  updated
}: DevInfoCardProps) {
  return (
    <div className={style.card}>
      fndjskalgnbfjkdsl
    </div>
  )
}

export default DevInfoCard;