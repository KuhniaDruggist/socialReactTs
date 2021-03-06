import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './DialogItem.module.css';
import {DialogType} from '../../../redux/dialogsReducer';

function DialogItem(props: DialogType) {
    return (
        <li className={style.item}>
            <img className={style.avatar} src={props.photo} alt={'Аватар пользователя'}/>
            <NavLink to={'/dialogs/' + props.id} className={style.link}
                     activeClassName={style.active}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;