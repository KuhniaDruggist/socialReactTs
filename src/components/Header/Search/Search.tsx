import React from 'react';
import style from './Search.module.css';

function Search() {
    return (
        <div className={style.search}>
            <label className={style.label} htmlFor="search">Поиск по странице</label>
            <input className={style.input} id="search" type="text" name="search" placeholder="Поиск по странице"/>
        </div>
    );
}

export default Search;