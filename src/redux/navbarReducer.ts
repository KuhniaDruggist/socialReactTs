import {v1} from 'uuid'

//Typing for initialState
export type InitialStateType = typeof initialState
export type FriendType = {
    id: string
    name: string
    photo: string
}

const initialState = {
    bestFriends: [
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
            name: 'Кристофер',
            photo: 'https://i.pinimg.com/originals/e4/55/d2/e455d2e6e205c8eeeda1356a00cc6bfb.jpg'
        }
    ] as FriendType[]
}
export const navbarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {   //refactor any
    return state
}