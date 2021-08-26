import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './PostForm.module.css';
import {ActionTypes, addPostAC, changeNewPostTextAC, changeNewPostTitleAC} from '../../../../redux/store';

type PostFormPropsType = {
    dispatch: (action: ActionTypes) => void
    newPostTitle: string
    newPostText: string
}

function PostForm(props: PostFormPropsType) {
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => props.dispatch(changeNewPostTitleAC(e.currentTarget.value));
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(changeNewPostTextAC(e.currentTarget.value));

    const addPost = () => props.dispatch(addPostAC());
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPost();
        }
    }

    return (
        <div className={style.postForm}>
            <h3 className={style.titleForm}>Add post</h3>
            <form className={style.form}>
                <input className={style.titlePost}
                       name="newPostTitle"
                       placeholder="Title your post"
                       value={props.newPostTitle}
                       onChange={ changeTitle } onKeyPress={onKeyPressHandler}/>
                <textarea className={style.textPost}
                          name="newPostText"
                          placeholder="Add post text"
                          value={props.newPostText}
                          onChange={ changeText }/>
                <button className={style.button} type="button" onClick={addPost} >Add</button>
            </form>
        </div>
    );
}

export default PostForm;