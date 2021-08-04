import React from 'react';
import style from './Message.module.css';

type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return (
        <li className={style.item}>{props.message}</li>
    );
}

export default Message;
