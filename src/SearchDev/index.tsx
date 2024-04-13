import { ChangeEvent, useState } from 'react';
import style from './SearchDev.module.css';
import { useNavigate } from 'react-router-dom';

interface GithubProps {
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  stars: string;
  avatar_url: string;
}

function SearchDev() {
  const [searchInput, setSearchInput] = useState<string>('')
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchInput(value);
  }

  async function handleClick() {
    try {
      const response = await fetch(`https://api.github.com/users/${searchInput}`);
      const userData: GithubProps = await response.json();
      const s = await fetch(`https://api.github.com/users/${userData.login}/repos`);
      console.log(await s.json())
      navigate('/devinfo', {state: userData})
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={style.main}>
      <p className={style.text}>Search Devs</p>
      <div className={style.searchArea}>
        <input 
          className={style.searchInput}
          placeholder='Type the username here...'
          onChange={(e) => handleChange(e)}
          value={searchInput}
        />
        <button 
          className={style.searchButton}
          onClick={handleClick}
        >
          Buscar
        </button>
      </div>
    </div>
  )
}

export default SearchDev;