import React from 'react';
import style from './Profile.module.css'
import Background from './Background/Background';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profile: UserProfileType | null
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={style.wrapper}>
            <Background/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;