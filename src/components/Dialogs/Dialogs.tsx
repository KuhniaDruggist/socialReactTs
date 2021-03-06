import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

function Dialogs(props: DialogsPropsType) {
    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} photo={d.photo}/>)
    let messageElements = props.messages.map(m => <Message key={m.id} message={m.message} position={m.position}/>)

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessage(e.currentTarget.value);
    const addNewMessage = () => props.addNewMessage();

    return (
        <div className={style.dialogs}>
            <h3 className={style.title}>Messaging</h3>
            <ul className={`${style.list} ${style.dialogsList}`}>
                {dialogElements}
            </ul>
            <div className={style.messagesWrapper}>
                <ul className={`${style.list} ${style.messagesList}`}>
                    {messageElements}
                </ul>
                <div className={style.messageForm}>
                    <textarea className={style.textMessage}
                              value={props.newMessage}
                              onChange={changeMessage}
                              name="newMessage"
                              placeholder="Type a message"/>
                    <button className={style.messageButton} type="button" onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs