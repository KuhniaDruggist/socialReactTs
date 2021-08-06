import React from 'react';
import style from './Message.module.css';

export type MessageType = {
    id?: number
    message: string
}

function Message(props: MessageType) {
    return (
        <li className={style.item}>{props.message}</li>
    );
}

export default Message;
