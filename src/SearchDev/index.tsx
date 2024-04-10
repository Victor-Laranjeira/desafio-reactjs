import { ChangeEvent, useState } from 'react';
import style from './SearchDev.module.css'

function SearchDev() {
  const [searchInput, setSearchInput] = useState<string>('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    console.log(value);
    setSearchInput(value);
  }

  async function handleClick() {
    try {
      const response = await fetch(`https://api.github.com/users/${searchInput}`);
      console.log(await response.json())
    } catch (e) {
      console.log(e)
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