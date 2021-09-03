import {v1} from 'uuid';

//Action creators types
export type ProfileActionTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewPostTitle> |
    ReturnType<typeof changeNewPostText>

//Action creators
export const addPost = () => ({type: 'ADD_POST'} as const);
export const changeNewPostTitle = (title: string) => ({type: 'CHANGE_NEW_POST_TITLE', title} as const);
export const changeNewPostText = (text: string) => ({type: 'CHANGE_NEW_POST_TEXT', text} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type PostType = {
    id?: string
    title: string
    message: string
    likes: number
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
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionTypes): InitialStateType => {
    let newState = {
        ...state,
        posts: [...state.posts]
    }

    switch (action.type) {
        case 'ADD_POST':
            if (newState.newPostTitle && newState.newPostText) {
                newState.posts.push(
                    {
                        id: v1(),
                        title: newState.newPostTitle,
                        message: newState.newPostText,
                        likes: 0
                    }
                );
                newState.newPostTitle = '';
                newState.newPostText = '';
            }
            return newState
        case 'CHANGE_NEW_POST_TITLE':
            newState.newPostTitle = action.title;
            return newState
        case 'CHANGE_NEW_POST_TEXT':
            newState.newPostText = action.text;
            return newState
        default:
            return state
    }
}