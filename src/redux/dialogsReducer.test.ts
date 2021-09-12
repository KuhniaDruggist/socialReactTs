import {v1} from 'uuid';
import {addMessage, changeNewMessage, dialogsReducer, DialogType, MessageType} from './dialogsReducer';

type StartStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

let startState: StartStateType;

beforeEach(() => {
    startState = {
        dialogs: [
            {
                id: v1(),
                name: 'Виталий',
                photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'
            }
        ],
        messages: [
            {id: v1(), message: 'Hi!', position: 'left'},
            {id: v1(), message: 'Hi. How are you?', position: 'right'},
        ],
        newMessage: ''
    }
});

test('new message should be added', () => {
    startState.newMessage = 'hello';
    const endState = dialogsReducer(startState, addMessage())

    expect(endState.messages.length).toBe(3);
    expect(endState.messages[2].message).toBe('hello');
});

test('property newMessage of state should be changed', () => {
    const newMessage = 'Hello, Alex'

    const endState = dialogsReducer(startState, changeNewMessage(newMessage));

    expect(endState.newMessage).toBe('Hello, Alex');
});