import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>
                        Моя страница
                    </li>
                    <li className={style.item}>
                        Новости
                    </li>
                    <li className={style.item}>
                        Мессенджер
                    </li>
                    <li className={style.item}>
                        Друзья
                    </li>
                    <li className={style.item}>
                        Все пользователи
                    </li>
                    <li className={style.item}>
                        Сообщества
                    </li>
                    <li className={style.item}>
                        Фотографии
                    </li>
                    <li className={style.item}>
                        Музыка
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;