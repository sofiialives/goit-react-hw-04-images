import { useState } from 'react';
import css from './Searchbar.module.css'

export const Searchbar = ({picImg}) => {
  const [picture, setPicture] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (picture.trim() === '') {
        alert('What would you like to find?')
        return
    }
    picImg(picture);
    setPicture('');
  };

  const changeName = evt => {
    setPicture(evt.currentTarget.value.toLowerCase() );
  };

    return (
      <header className={css.searchbar} onSubmit={handleSubmit}>
        <form className="form">
          <button type="submit" className={css.barBtn}>
            <span className={css.buttonLabel}>&#128269;</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={picture}
            onChange={changeName}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}
