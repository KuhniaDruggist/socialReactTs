import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Мои публикации</h3>
            <form className={style.form}>
                <input name='newPostTitle' placeholder='Озаглавьте свой пост'/>
                <textarea name='newPostText' placeholder='Добавьте текст поста'/>
                <button className={style.button} type="submit">Добавить</button>
            </form>
            <ul className={style.posts}>
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </div>
    )
}

export default MyPosts;