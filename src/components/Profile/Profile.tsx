import React from 'react';
import style from "./Profile.module.css"
import Background from './Background/Background';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={style.wrapper}>
            <Background />
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;