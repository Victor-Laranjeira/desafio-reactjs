import { ChangeEvent, useState } from 'react';
import style from './SearchDev.module.css';
import { useNavigate } from 'react-router-dom';

function SearchDev() {
  const [searchInput, setSearchInput] = useState<string>('')
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchInput(value);
  }

  async function handleClick() {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${searchInput}`);
      const userData = await userResponse.json();
      const repositoryResponse = await fetch(`https://api.github.com/users/${userData.login}/repos`);
      const repositoryData = await repositoryResponse.json();
      console.log(userData);
      const githubInfo = {
        userData: userData,
        repositoryData: repositoryData,
      };
      navigate('/devinfo', {state: githubInfo});
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <title>Home</title>
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
    </>
  )
}

export default SearchDev;