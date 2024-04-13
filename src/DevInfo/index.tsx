import style from './DevInfo.module.css'
import DevInfoSideContent from './Components/DevInfoSideContent';
import { useLocation } from 'react-router-dom';
import DevInfoBody from './Components/DevInfoBody';

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
        name={state.userData.name}
        login={state.userData.login}
        bio={state.userData.bio}
        followers={state.userData.followers}
        following={state.userData.following}
        stars={state.userData.stars}
        image_url={state.userData.avatar_url}
      />
      <DevInfoBody repositoryArray={state.repositoryData} />
    </div>
  )
}

export default DevInfo;