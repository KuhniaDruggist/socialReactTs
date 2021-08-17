import {v1} from 'uuid';

export type RootStoreType = {
    _state: StateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    addPost: () => void
    changeNewPostTitle: (title: string) => void
    changeNewPostText: (text: string) => void
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
                {id: v1(), name: 'Виталий', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
                {id: v1(), name: 'Себастьян', photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
                {id: v1(), name: 'Анжела Перл', photo: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png'},
                {id: v1(), name: 'Кристофер', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'},
                {id: v1(), name: 'Мирослава', photo: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
            ],
            messages: [
                {id: v1(), message: 'Hi!', position: 'left'},
                {id: v1(), message: 'Hi. How are you?', position: 'right'},
                {id: v1(), message: 'I am fine. Thank you.', position: 'left'},
                {id: v1(), message: 'Where is my money?', position: 'right'},
                {id: v1(), message: 'Bye)))', position: 'left'}
            ]
        },
        navbar: {
            bestFriends: [
                {id: 1, name: 'Виталий', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
                {id: 2, name: 'Себастьян', photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
                {id: 3, name: 'Кристофер', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'}
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
    addPost() {
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
    },
    changeNewPostTitle(title: string) {
        this._state.profilePage.newPostTitle = title;
        this._subscriber();
    },
    changeNewPostText(text: string) {
        this._state.profilePage.newPostText = text;
        this._subscriber();
    }
}