import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <h3 className={style.title}>Messaging</h3>
            <ul className={`${style.list} ${style.dialogsList}`}>
                <DialogItem id={1} name='Виталий'/>
                <DialogItem id={2} name='Себастьян'/>
                <DialogItem id={3} name='Анжела Перл'/>
                <DialogItem id={4} name='Кристофер'/>
                <DialogItem id={5} name='Мирослава'/>
            </ul>
            <ul className={`${style.list} ${style.messagesList}`}>
                <Message  message='Hi!'/>
                <Message  message='Hi. How are you?'/>
                <Message  message='I am fine. Thank you.'/>
                <Message  message='Where is my money?'/>
                <Message  message='Bye)))'/>
            </ul>
        </div>
    );
}

export default Dialogs