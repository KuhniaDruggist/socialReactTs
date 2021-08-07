import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import {PostType} from '../../../redux/state';

type PropsType = {
    posts: PostType[]
}

function MyPosts(props: PropsType) {
    let postElements = props.posts.map(p => <Post title={p.title} message={p.message} likes={p.likes}/>)
    return (
        <div>
            <h3 className={style.title}>My publications</h3>
            <div className={style.wrapper}>
                <PostForm/>
                <ul className={style.posts}>
                    { postElements }
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;