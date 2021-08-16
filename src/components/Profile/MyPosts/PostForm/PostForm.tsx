import React from 'react';
import { ChangeEvent } from 'react';
import style from './PostForm.module.css';

type PostFormPropsType = {
    addPost: () => void
    changeNewPostTitle: (title: string) => void
    changeNewPostText: (text: string) => void
    newPostTitle: string
    newPostText: string
}

function PostForm(props: PostFormPropsType) {
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => props.changeNewPostTitle(e.currentTarget.value);
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeNewPostText(e.currentTarget.value);

    const addPost = () => {
        props.addPost();
    }

    return (
        <div className={style.postForm}>
            <h3 className={style.titleForm}>Add post</h3>
            <form className={style.form}>
                <input className={style.titlePost}
                       name="newPostTitle"
                       placeholder="Title your post"
                       value={props.newPostTitle}
                       onChange={ changeTitle } />
                <textarea className={style.textPost}
                          name="newPostText"
                          placeholder="Add post text"
                          value={props.newPostText}
                          onChange={ changeText }/>
                <button className={style.button} type="button" onClick={addPost}>Add</button>
            </form>
        </div>
    );
}

export default PostForm;