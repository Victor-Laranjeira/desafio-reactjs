import react from 'react'
import style from './DevInfo.module.css'
import DevInfoSideContent from './Components/DevInfoSideContent';
import { useLocation } from 'react-router-dom';

interface GithubProps {
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  stars: string;
  avatar_url: string;
}

function DevInfo() {
  let { state } = useLocation();
  console.log(state)
  return (
    <div className={style.main}>
      <DevInfoSideContent
        name={state.name}
        login={state.login}
        bio={state.bio}
        followers={state.followers}
        following={state.following}
        stars={state.stars}
        image_url={state.avatar_url}
      />
    </div>
  )
}

export default DevInfo;