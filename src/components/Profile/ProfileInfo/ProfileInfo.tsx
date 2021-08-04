import React from 'react';
import style from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={style.info}>
            <div className={style.userPhoto}>
                <img className={style.photo} alt="Аватар пользователя"
                     src={'https://avatars.githubusercontent.com/u/48412681?v=4'}/>
                <button className={style.button} type="button">Edit</button>
            </div>

            <div>
                <h2 className={style.fullName}>Alexei Kuharenko</h2>
                <p className={style.aboutMe}>learn React with TypeScript</p>
            </div>
        </div>
    );
}

export default ProfileInfo;