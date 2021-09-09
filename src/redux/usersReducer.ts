//Action creators types
export type UsersActionTypes = ReturnType<typeof setUsers> | ReturnType<typeof toggleFollowing>

//Action creators
export const setUsers = (users: UsersType[]) => ({type: 'SET_USERS', users} as const);
export const toggleFollowing = (userId: number) => ({type: 'TOGGLE_FOLLOWING', userId} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type UsersType = {
    name: string | null
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type PhotosType = {
    small: string | null
    large: string | null
}

const initialState = {
    users: [] as UsersType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case 'TOGGLE_FOLLOWING':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: !u.followed}
                    : u
                )
            }
        default:
            return state
    }
}