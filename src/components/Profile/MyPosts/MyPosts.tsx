import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import {MyPostsPropsType} from './MyPostsContainer';

function MyPosts(props: MyPostsPropsType) {
    let postElements = props.posts.map(p => <Post key={p.id} title={p.title} message={p.message} likes={p.likes}/>)
    return (
        <div>
            <h3 className={style.title}>My publications</h3>
            <div className={style.wrapper}>
                <PostForm addPost={props.addPost}
                          changeTitle={props.changeTitle}
                          changeText={props.changeText}
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