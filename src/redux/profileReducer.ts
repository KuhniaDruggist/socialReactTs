import {v1} from 'uuid';
import {ProfilePageType} from './store';

//Constants action type
const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

//Action creators
export const addPost = () => ({type: ADD_POST} as const);
export const changeNewPostTitle = (title: string) => ({type: CHANGE_NEW_POST_TITLE, title} as const);
export const changeNewPostText = (text: string) => ({type: CHANGE_NEW_POST_TEXT, text} as const);

//Action types
export type ProfileActionTypes = ReturnType<typeof addPost> | ReturnType<typeof changeNewPostTitle> | ReturnType<typeof changeNewPostText>

export const profileReducer = (state: ProfilePageType, action: ProfileActionTypes) => {
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