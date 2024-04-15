import { ChangeEvent, useEffect, useState } from 'react';
import style from './SearchDev.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchDev() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";
  }, [])

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
      if (userData?.message) {
        handleError();
        return;
      }
      const githubInfo = {
        userData: userData,
        repositoryData: repositoryData,
      };
      return navigate('/perfil', {state: githubInfo});
    } catch (e) {
      handleError();
    }
  }

  function handleError() {
    setErrorMessage(true)
    setTimeout(() => {
      setErrorMessage(false);
    }, 2000);
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
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          Buscar
        </button>
      </div>
      {
        errorMessage && <p>Usuário não encontrado.</p>
      }
    </div>
  )
}

export default SearchDev;