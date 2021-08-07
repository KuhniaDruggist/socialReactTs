import React from 'react';
import style from "./Profile.module.css"
import Background from './Background/Background';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/state';

type PropsType = {
    state: ProfilePageType
}

function Profile(props: PropsType) {
    return (
        <div className={style.wrapper}>
            <Background />
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;