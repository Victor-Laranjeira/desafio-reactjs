import react from 'react'
import style from './DevInfo.module.css'
import DevInfoSideContent from './Components/DevInfoSideContent';

function DevInfo() {
  return (
    <div className={style.main}>
      <DevInfoSideContent />
    </div>
  )
}

export default DevInfo;