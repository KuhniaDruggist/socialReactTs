import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import MyPosts from './MyPosts';
import {addPost, changeNewPostText, changeNewPostTitle, PostType} from '../../../redux/profileReducer';
import {Dispatch} from 'redux';

//Typing for MyPosts component props
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    posts: PostType[]
    newPostTitle: string
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    changeTitle: (title: string) => void
    changeText: (text: string) => void
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostTitle: state.profilePage.newPostTitle,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        changeTitle: (title: string) => {
            dispatch(changeNewPostTitle(title))
        },
        changeText: (text: string) => {
            dispatch(changeNewPostText(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);