//Typing for initialState
export type NavbarType = {
    bestFriends: FriendType[]
}
export type FriendType = {
    id: number
    name: string
    photo: string
}

const initialState: NavbarType = {
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
export const navbarReducer = (state: NavbarType = initialState, action: any): NavbarType => {   //refactor any
    return state
}