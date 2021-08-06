import React from 'react';
import style from './Dialogs.module.css';
import DialogItem, {DialogType} from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';

function Dialogs() {
    const dialogs: DialogType[] = [
        {id: 1, name: 'Виталий'},
        {id: 2, name: 'Себастьян'},
        {id: 3, name: 'Анжела Перл'},
        {id: 4, name: 'Кристофер'},
        {id: 5, name: 'Мирослава'}
    ];

    const messages: MessageType[] = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hi. How are you?'},
        {id: 3, message: 'I am fine. Thank you.'},
        {id: 4, message: 'Where is my money?'},
        {id: 5, message: 'Bye)))'}
    ];

    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = messages.map(m => <Message  message={m.message} />)

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