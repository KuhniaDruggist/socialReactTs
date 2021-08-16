import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import {PostType} from '../../../redux/state';

type MyPostPropsType = {
    addPost: () => void
    changeNewPostTitle: (title: string) => void
    changeNewPostText: (text: string) => void
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
                <PostForm addPost={props.addPost}
                          newPostTitle={props.newPostTitle}
                          newPostText={props.newPostText}
                          changeNewPostTitle={props.changeNewPostTitle}
                          changeNewPostText={props.changeNewPostText} />
                <ul className={style.posts}>
                    { postElements }
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;