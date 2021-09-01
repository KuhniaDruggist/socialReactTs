import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css';
import BestFriends from './BestFriends/BestFriends';
import {NavbarType} from '../../redux/navbarReducer';

type PropsType = {
    state: NavbarType
}

function Navbar(props: PropsType) {
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink to="/profile"
                                 activeClassName={style.active}>
                            Моя страница
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/news"
                                 activeClassName={style.active}>
                            Новости
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/dialogs"
                                 activeClassName={style.active}>
                            Сообщения
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/friends"
                                 activeClassName={style.active}>
                            Друзья
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <BestFriends bestFriends={props.state.bestFriends}/>
        </div>
    );
}

export default Navbar;