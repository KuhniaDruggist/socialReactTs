import React from 'react';
import style from './Post.module.css';
import {PostType} from '../../../../redux/state';

function Post(props: PostType) {
    return (
        <li className={style.post}>
            <div className={style.postHeader}>
                <img className={style.photo} alt="Аватар поста"
                     src="https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg"/>
                <h3 className={style.title}>{props.title}</h3>
            </div>
            <p className={style.content}>{props.message}</p>
            <p className={style.likes}>likes: {props.likes}</p>
        </li>
    );
}

export default Post;