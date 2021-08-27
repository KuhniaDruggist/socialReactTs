import {v1} from 'uuid';

//Constants action type
const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE';

//Action types
export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewPostTitleAC> |
    ReturnType<typeof changeNewPostTextAC> |
    ReturnType<typeof changeNewMessageAC> |
    ReturnType<typeof addMessageAC>;

//Store typing
export type RootStoreType = {
    _state: StateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostTitle: string
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}
export type NavbarType = {
    bestFriends: FriendType[]
}

export type PostType = {
    id?: string
    title: string
    message: string
    likes: number
}

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

export type FriendType = {
    id: number
    name: string
    photo: string
}

export const store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: v1(),
                    title: 'Чернобыль',
                    message: 'Девять лет назад я поехал на экскурсию в Чернобыль',
                    likes: 20000
                },
                {
                    id: v1(),
                    title: '23.34',
                    message: '12 суток - не за что',
                    likes: 200000
                }
            ],
            newPostTitle: '',
            newPostText: ''
        },
        dialogsPage: {
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
                {id: v1(), name: 'Мирослава', photo: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
            ],
            messages: [
                {id: v1(), message: 'Hi!', position: 'left'},
                {id: v1(), message: 'Hi. How are you?', position: 'right'},
                {id: v1(), message: 'I am fine. Thank you.', position: 'left'},
                {id: v1(), message: 'Where is my money?', position: 'right'},
                {id: v1(), message: 'Bye)))', position: 'left'}
            ],
            newMessage: ''
        },
        navbar: {
            bestFriends: [
                {
                    id: 1,
                    name: 'Виталий',
                    photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'
                },
                {
                    id: 2,
                    name: 'Себастьян',
                    photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
                },
                {
                    id: 3,
                    name: 'Кристофер',
                    photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'
                }
            ]
        }
    },
    _subscriber() {
        console.log('no subscribers (observers)');
    },
    subscribe(observer: () => void) {
        this._subscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        switch (action.type) {
            case (ADD_POST) :
                if (this._state.profilePage.newPostTitle && this._state.profilePage.newPostText) {
                    this._state.profilePage.posts.push(
                        {
                            id: v1(),
                            title: this._state.profilePage.newPostTitle,
                            message: this._state.profilePage.newPostText,
                            likes: 0
                        }
                    );
                    this._state.profilePage.newPostTitle = '';
                    this._state.profilePage.newPostText = '';
                }
                this._subscriber();
                break

            case (CHANGE_NEW_POST_TITLE):
                this._state.profilePage.newPostTitle = action.title;
                this._subscriber();
                break

            case (CHANGE_NEW_POST_TEXT):
                this._state.profilePage.newPostText = action.text;
                this._subscriber();
                break

            case (ADD_MESSAGE):
                if (this._state.dialogsPage.newMessage) {
                    this._state.dialogsPage.messages.push(
                        {
                            id: v1(),
                            message: this._state.dialogsPage.newMessage,
                            position: 'right'
                        }
                    );
                    this._state.dialogsPage.newMessage = '';
                }
                this._subscriber();
                break

            case(CHANGE_NEW_MESSAGE):
                this._state.dialogsPage.newMessage = action.text;
                this._subscriber();
                break

        }

    }
}


export const addPostAC = () => ({type: ADD_POST} as const);
export const addMessageAC = () => ({type: ADD_MESSAGE} as const);
export const changeNewPostTitleAC = (title: string) => ({type: CHANGE_NEW_POST_TITLE, title} as const);
export const changeNewPostTextAC = (text: string) => ({type: CHANGE_NEW_POST_TEXT, text} as const);
export const changeNewMessageAC = (text: string) => ({type: CHANGE_NEW_MESSAGE, text} as const);