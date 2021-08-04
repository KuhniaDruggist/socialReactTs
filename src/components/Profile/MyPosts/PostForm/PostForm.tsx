import React from 'react';
import style from './PostForm.module.css';

function PostForm() {
    return (
        <div className={style.postForm}>
            <h3 className={style.titleForm}>Add post</h3>
            <form className={style.form}>
                <input className={style.titlePost} name="newPostTitle" placeholder="Title your post"/>
                <textarea className={style.textPost} name="newPostText" placeholder="Add post text"/>
                <button className={style.button} type="submit">Add</button>
            </form>
        </div>
    );
}

export default PostForm;