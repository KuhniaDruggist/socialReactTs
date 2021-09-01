import {v1} from 'uuid';

//Constants action type
const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

//Action creators types
export type ProfileActionTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewPostTitle> |
    ReturnType<typeof changeNewPostText>

//Action creators
export const addPost = () => ({type: ADD_POST} as const);
export const changeNewPostTitle = (title: string) => ({type: CHANGE_NEW_POST_TITLE, title} as const);
export const changeNewPostText = (text: string) => ({type: CHANGE_NEW_POST_TEXT, text} as const);

//Typing for initialState
export type ProfilePageType = {
    posts: PostType[]
    newPostTitle: string
    newPostText: string
}
export type PostType = {
    id?: string
    title: string
    message: string
    likes: number
}

const initialState: ProfilePageType = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST :
            if (state.newPostTitle && state.newPostText) {
                state.posts.push(
                    {
                        id: v1(),
                        title: state.newPostTitle,
                        message: state.newPostText,
                        likes: 0
                    }
                );
                state.newPostTitle = '';
                state.newPostText = '';
            }
            return state
        case CHANGE_NEW_POST_TITLE:
            state.newPostTitle = action.title;
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}