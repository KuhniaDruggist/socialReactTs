import React from "react";
import style from './../BestFriends.module.css';
import {NavLink} from "react-router-dom";
import {FriendType} from '../../../../redux/store';

const FriendItem = (props: FriendType) => {
    let path = "/bestFriends/" + props.id;

    return (
        <li className={style.user}>
            <NavLink to={path} className={style.link} activeClassName={style.active}>
                <div className={style.userAvatar}>
                    <img alt="Аватар пользователя" src={props.photo}/>
                </div>
                <span className={style.userName}>{props.name}</span>
            </NavLink>
        </li>
    );
}

export default FriendItem;