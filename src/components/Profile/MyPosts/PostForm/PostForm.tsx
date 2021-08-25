import React from 'react';
import { ChangeEvent } from 'react';
import style from './PostForm.module.css';
import {ActionTypes} from '../../../../redux/store';

type PostFormPropsType = {
    dispatch: (action: ActionTypes) => void
    newPostTitle: string
    newPostText: string
}

function PostForm(props: PostFormPropsType) {
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => props.dispatch({type: 'CHANGE_NEW_POST_TITLE', title: e.currentTarget.value});
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch({type: 'CHANGE_NEW_POST_TEXT', text: e.currentTarget.value});

    const addPost = () => {
        props.dispatch({type: 'ADD_POST'});
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