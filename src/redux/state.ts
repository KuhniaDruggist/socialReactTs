export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
}
export type MessageType = {
    id?: number
    message: string
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
            {id: 1, name: 'Виталий'},
            {id: 2, name: 'Себастьян'},
            {id: 3, name: 'Анжела Перл'},
            {id: 4, name: 'Кристофер'},
            {id: 5, name: 'Мирослава'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Hi. How are you?'},
            {id: 3, message: 'I am fine. Thank you.'},
            {id: 4, message: 'Where is my money?'},
            {id: 5, message: 'Bye)))'}
        ]
    }
};

export default state;