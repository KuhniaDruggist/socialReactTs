import React from 'react';
import style from './Profile.module.css'
import Background from './Background/Background';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

function Profile() {
    return (
        <div className={style.wrapper}>
            <Background/>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;