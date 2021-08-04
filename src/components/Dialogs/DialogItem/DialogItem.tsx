import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';


type DialogType = {
    id: number
    name: string
}

function DialogItem(props: DialogType) {
    return (
        <li className={style.item}>
            <NavLink to={"/dialogs/" + props.id} className={style.link} activeClassName={style.active}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;