import React from 'react';
import style from './Message.module.css';
import {MessageType} from '../../../redux/dialogsReducer';

function Message(props: MessageType) {

    const itemClass = style.item + ` ` + style[props.position]

    return (
        <li className={itemClass}>
            <div className={style.avatar}>{/*Здесь будет аватар*/}</div>
            <p className={style.text}>{props.message}</p>
        </li>
    );
}

export default Message;
