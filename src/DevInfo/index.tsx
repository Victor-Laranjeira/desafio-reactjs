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
      <DevInfoBody title='Titulo' bio='nfdjskagbfjkhds bfdhsgbk hfjds bghfdjskbghfdjsk bghfdjskbgfhdsjkb hgfjdskbgfhndjskbghfdjskgfds' stars='100' updated='Updated 30 days ago' />
    </div>
  )
}

export default DevInfo;