import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type PropsType = {
    state: DialogsPageType
}

function Dialogs(props: PropsType) {
    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} photo={d.photo}/>)
    let messageElements = props.state.messages.map(m => <Message  message={m.message} position={m.position}/>)

    return (
        <div className={style.dialogs}>
            <h3 className={style.title}>Messaging</h3>
            <ul className={`${style.list} ${style.dialogsList}`}>
                { dialogElements }
            </ul>
            <ul className={`${style.list} ${style.messagesList}`}>
                { messageElements }
            </ul>
        </div>
    );
}

export default Dialogs