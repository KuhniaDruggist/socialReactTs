import {v1} from 'uuid';
import {DialogsPageType} from './store';

//Constants action type
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE';

//Action creators
export const addMessage = () => ({type: ADD_MESSAGE} as const);
export const changeNewMessage = (text: string) => ({type: CHANGE_NEW_MESSAGE, text} as const);

//Action types
export type DialogsActionTypes = ReturnType<typeof changeNewMessage> | ReturnType<typeof addMessage>;

export const dialogsReducer = (state: DialogsPageType, action: DialogsActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessage) {
                state.messages.push(
                    {
                        id: v1(),
                        message: state.newMessage,
                        position: 'right'
                    }
                );
                state.newMessage = '';
            }
            return state
        case CHANGE_NEW_MESSAGE:
            state.newMessage = action.text;
            return state
        default:
            return state
    }
}