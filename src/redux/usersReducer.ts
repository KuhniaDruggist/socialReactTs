//Action creators types
export type UsersActionTypes =
    ReturnType<typeof setUsers> |
    ReturnType<typeof toggleFollowing> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching>

//Action creators
export const setUsers = (users: UsersType[]) => ({type: 'SET_USERS', users} as const);
export const toggleFollowing = (userId: number) => ({type: 'TOGGLE_FOLLOWING', userId} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const);

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
    small: string | undefined
    large: string | undefined
}

const initialState = {
    users: [] as UsersType[],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            }
        case 'TOGGLE_FOLLOWING':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: !u.followed}
                    : u
                )
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}