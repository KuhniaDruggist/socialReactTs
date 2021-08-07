import React from 'react';
import style from './Message.module.css';
import {MessageType} from '../../../redux/state';

function Message(props: MessageType) {
    return (
        <li className={style.item}>{props.message}</li>
    );
}

export default Message;
