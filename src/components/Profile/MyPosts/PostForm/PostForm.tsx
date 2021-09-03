import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './PostForm.module.css';

type PostFormPropsType = {
    addPost: () => void
    changeTitle: (title: string) => void
    changeText: (text: string) => void
    newPostTitle: string
    newPostText: string
}

function PostForm(props: PostFormPropsType) {
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => props.changeTitle(e.currentTarget.value);
    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeText(e.currentTarget.value);

    const addNewPost = () => props.addPost();
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNewPost();
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
                       onChange={changeTitle} onKeyPress={onKeyPressHandler}/>
                <textarea className={style.textPost}
                          name="newPostText"
                          placeholder="Add post text"
                          value={props.newPostText}
                          onChange={changeText}/>
                <button className={style.button} type="button" onClick={addNewPost}>Add</button>
            </form>
        </div>
    );
}

export default PostForm;