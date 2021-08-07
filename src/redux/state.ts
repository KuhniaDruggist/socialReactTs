export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
}

export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type NavbarType = {
    bestFriends: FriendType[]
}

export type PostType = {
    id?: number
    title: string
    message: string
    likes: number
}

export type DialogType = {
    id: number
    name: string
    photo: string
}
export type MessageType = {
    id?: number
    message: string
    position: string
}

export type FriendType = {
    id: number
    name: string
    photo: string
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                title: 'Чернобыль',
                message: 'Девять лет назад я поехал на экскурсию в Чернобыль',
                likes: 20000
            },
            {
                id: 2,
                title: '23.34',
                message: '12 суток - не за что',
                likes: 200000
            }
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Виталий', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
            {id: 2, name: 'Себастьян', photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
            {id: 3, name: 'Анжела Перл', photo: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png'},
            {id: 4, name: 'Кристофер', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'},
            {id: 5, name: 'Мирослава', photo: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hi!', position: 'left'},
            {id: 2, message: 'Hi. How are you?', position: 'right'},
            {id: 3, message: 'I am fine. Thank you.', position: 'left'},
            {id: 4, message: 'Where is my money?', position: 'right'},
            {id: 5, message: 'Bye)))', position: 'left'}
        ]
    },
    navbar: {
        bestFriends: [
            {id: 1, name: 'Виталий', photo: 'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'},
            {id: 2, name: 'Себастьян', photo: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'},
            {id: 3, name: 'Кристофер', photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'}
        ]
    }
};

export default state;