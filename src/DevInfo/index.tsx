import style from './DevInfo.module.css'
import DevInfoSideContent from './Components/DevInfoSideContent';
import { useLocation } from 'react-router-dom';
import DevInfoBody from './Components/DevInfoBody';

function DevInfo() {
  let { state } = useLocation();
  return (
    <div className={style.main}>
      <title>Perfil</title>
      <DevInfoSideContent
        name={state.userData.name}
        login={state.userData.login}
        bio={state.userData.bio}
        followers={state.userData.followers}
        following={state.userData.following}
        stars={state.userData.stars}
        image_url={state.userData.avatar_url}
        organization={state.userData.organization}
        blog={state.userData.blog}
        email={state.userData.email}
        twitter={state.userData.twitter_username}
        location={state.userData.location}
      />
      <DevInfoBody repositoryArray={state.repositoryData} />
    </div>
  )
}

export default DevInfo;