import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, addMessageAC, changeNewMessageAC, DialogsPageType} from '../../redux/store';

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

function Dialogs(props: PropsType) {
    let dialogElements = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} photo={d.photo}/>)
    let messageElements = props.state.messages.map(m => <Message  key={m.id} message={m.message} position={m.position}/>)

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(changeNewMessageAC(e.currentTarget.value));
    const addMessage = () => props.dispatch(addMessageAC());

    return (
        <div className={style.dialogs}>
            <h3 className={style.title}>Messaging</h3>
            <ul className={`${style.list} ${style.dialogsList}`}>
                { dialogElements }
            </ul>
            <div className={style.messagesWrapper}>
                <ul className={`${style.list} ${style.messagesList}`}>
                    { messageElements }
                </ul>
                <div className={style.messageForm}>
                    <textarea className={style.textMessage}
                              value={props.state.newMessage}
                              onChange={changeMessage}
                              name="newMessage"
                              placeholder="Type a message" />
                    <button  className={style.messageButton} type="button" onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs