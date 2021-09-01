import React from 'react';
import style from './Profile.module.css'
import Background from './Background/Background';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileActionTypes, ProfilePageType} from '../../redux/profileReducer';

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionTypes) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={style.wrapper}>
            <Background />
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostTitle={props.state.newPostTitle}
                     newPostText={props.state.newPostText} />
        </div>
    );
}

export default Profile;