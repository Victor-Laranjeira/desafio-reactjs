import style from './DevInfo.module.css'
import DevInfoSideContent from './Components/DevInfoSideContent';
import { useLocation, useNavigate } from 'react-router-dom';
import DevInfoBody from './Components/DevInfoBody';
import { useEffect, useState } from 'react';

function DevInfo() {
  const { state } = useLocation();
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Perfil";
  }, [])

  useEffect(() => {
    if (state) {
      return setIsLoaded(true);
    }
    navigate('/home');
  }, [])

  return (
    <>
    {
      isLoaded && (
        <div className={style.main}>
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
    </>
  )
}

export default DevInfo;