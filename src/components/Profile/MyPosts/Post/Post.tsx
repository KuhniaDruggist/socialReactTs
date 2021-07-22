import React from 'react';
import style from './Post.module.css';

function Post() {
    return (
        <li>
            <div>
                <img className={style.photo} alt="Аватар поста" src="https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg" />
                <h3 className={style.title}>Название поста</h3>
            </div>
            <p className={style.content}>Содержание поста</p>
            <p className={style.likes}>likes: 200</p>
        </li>
    )
}

export default Post;