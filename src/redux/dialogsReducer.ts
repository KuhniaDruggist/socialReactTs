import {v1} from 'uuid';

//Action creators types
export type DialogsActionTypes =
    ReturnType<typeof changeNewMessage> |
    ReturnType<typeof addMessage>;

//Action creators
export const addMessage = () => ({type: 'ADD_MESSAGE'} as const);
export const changeNewMessage = (text: string) => ({type: 'CHANGE_NEW_MESSAGE', text} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type DialogType = {
    id: string
    name: string
    photo: string
}
export type MessageType = {
    id?: string
    message: string
    position: string
}

const initialState = {
    dialogs: [
        {
            id: v1(),
            name: 'Виталий',
            photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'
        },
        {
            id: v1(),
            name: 'Себастьян',
            photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        },
        {
            id: v1(),
            name: 'Анжела Перл',
            photo: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png'
        },
        {
            id: v1(),
            name: 'Кристофер',
            photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'
        },
        {
            id: v1(),
            name: 'Мирослава',
            photo: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
        }
    ] as DialogType[],
    messages: [
        {id: v1(), message: 'Hi!', position: 'left'},
        {id: v1(), message: 'Hi. How are you?', position: 'right'},
        {id: v1(), message: 'I am fine. Thank you.', position: 'left'},
        {id: v1(), message: 'Where is my money?', position: 'right'},
        {id: v1(), message: 'Bye)))', position: 'left'}
    ] as MessageType[],
    newMessage: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            let newState = {
                ...state,
                messages: [...state.messages]
            }

            if (newState.newMessage) {
                newState.messages.push(
                    {
                        id: v1(),
                        message: state.newMessage,
                        position: 'right'
                    }
                );
                newState.newMessage = '';
            }
            return newState
        }
        case 'CHANGE_NEW_MESSAGE': {
            let newState = {
                ...state
            }
            newState.newMessage = action.text;
            return newState
        }
        default:
            return state
    }
}