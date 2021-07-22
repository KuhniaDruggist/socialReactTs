import React from 'react';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search'

function Header() {
    return (
        <header className={style.header}>
            <Logo/>
            <Search/>

            <button type="button">Уведомления</button>
            <button type="button">Музыка</button>

            <ul className={style.userNavigation}>
                <li>Вход</li>
            </ul>
        </header>
    );
}

export default Header;