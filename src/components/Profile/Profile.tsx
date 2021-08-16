import React from 'react';
import style from "./Profile.module.css"
import Background from './Background/Background';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={style.wrapper}>
            <Background />
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     addPost={props.state.addPost}
                     newPostTitle={props.state.newPostTitle}
                     changeNewPostTitle={props.state.changeNewPostTitle}
                     changeNewPostText={props.state.changeNewPostText}
                     newPostText={props.state.newPostText} />
        </div>
    );
}

export default Profile;