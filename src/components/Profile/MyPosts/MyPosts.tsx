import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import {PostType, ProfileActionTypes} from '../../../redux/profileReducer';

type MyPostPropsType = {
    dispatch: (action: ProfileActionTypes) => void
    posts: PostType[]
    newPostTitle: string
    newPostText: string
}

function MyPosts(props: MyPostPropsType) {
    let postElements = props.posts.map(p => <Post key={p.id} title={p.title} message={p.message} likes={p.likes}/>)
    return (
        <div>
            <h3 className={style.title}>My publications</h3>
            <div className={style.wrapper}>
                <PostForm dispatch={props.dispatch}
                          newPostTitle={props.newPostTitle}
                          newPostText={props.newPostText}
                           />
                <ul className={style.posts}>
                    { postElements }
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;