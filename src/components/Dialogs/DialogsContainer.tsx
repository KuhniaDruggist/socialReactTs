import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {addMessage, changeNewMessage, DialogType, MessageType} from '../../redux/dialogsReducer';
import { Dispatch } from 'redux';
import Dialogs from './Dialogs';

//Typing for Dialogs component props
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

type MapDispatchPropsType = {
    addNewMessage: () => void
    changeMessage: (message: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessage: () => {
            dispatch(addMessage())
        },
        changeMessage: (message: string) => {
            dispatch(changeNewMessage(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);