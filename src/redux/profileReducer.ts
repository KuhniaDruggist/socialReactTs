import {v1} from 'uuid';
import {PhotosType} from './usersReducer';

//Action creators types
export type ProfileActionTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewPostTitle> |
    ReturnType<typeof changeNewPostText> |
    ReturnType<typeof setUserProfile>

//Action creators
export const addPost = () => ({type: 'ADD_POST'} as const);
export const changeNewPostTitle = (title: string) => ({type: 'CHANGE_NEW_POST_TITLE', title} as const);
export const changeNewPostText = (text: string) => ({type: 'CHANGE_NEW_POST_TEXT', text} as const);
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET_USER_PROFILE', profile} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type PostType = {
    id?: string
    title: string
    message: string
    likes: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

const initialState = {
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
    ] as PostType[],
    newPostTitle: '',
    newPostText: '',
    profile: null as UserProfileType | null
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            if (state.newPostTitle && state.newPostText) {
                return {
                    ...state,
                    posts: [...state.posts, {
                        id: v1(),
                        title: state.newPostTitle,
                        message: state.newPostText,
                        likes: 0
                    }],
                    newPostTitle: '',
                    newPostText: ''
                }
            }
            return state
        case 'CHANGE_NEW_POST_TITLE':
            return {...state, newPostTitle: action.title}
        case 'CHANGE_NEW_POST_TEXT':
            return {...state, newPostText: action.text}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}