import React from 'react';
import style from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import like from '../../../assets/img/like.png';
import dislike from '../../../assets/img/dislike.png';

type ProfileInfoPropsType = {
    profile: UserProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.info}>
            <div className={style.userPhoto}>
                <img className={style.photo} alt="Аватар пользователя"
                     src={props.profile.photos.large}/>
                <button className={style.button} type="button">Edit</button>
            </div>

            <div>
                <h2 className={style.fullName}>{props.profile.fullName}</h2>
                <p className={style.aboutMe}>{props.profile.aboutMe}</p>
                <div className={style.job}>
                    <div className={style.jobSearch}>
                        <p>Ищу работу:</p>
                        <img alt="job search status" src={props.profile.lookingForAJob ? like : dislike} />
                    </div>
                    <p className={style.jobStatus}>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;