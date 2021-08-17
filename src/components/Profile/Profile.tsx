import React from 'react';
import style from "./Profile.module.css"
import Background from './Background/Background';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    changeNewPostTitle: (title: string) => void
    changeNewPostText: (text: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={style.wrapper}>
            <Background />
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     newPostTitle={props.state.newPostTitle}
                     changeNewPostTitle={props.changeNewPostTitle}
                     changeNewPostText={props.changeNewPostText}
                     newPostText={props.state.newPostText} />
        </div>
    );
}

export default Profile;