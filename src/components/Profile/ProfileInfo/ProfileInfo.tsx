import React from 'react';
import style from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={style.info}>
            <div className={style.userPhoto}>
                <img className={style.photo} alt="Аватар пользователя"
                     src={'https://i.pinimg.com/736x/52/cc/bc/52ccbc8cc85e151b590476e1a815a96d.jpg'}/>
                <button className={style.button} type="button">Редактировать</button>
            </div>

            <div>
                <h2 className={style.fullName}>Алексей Кухаренко</h2>
                <p className={style.aboutMe}>learn React with TypeScript</p>
            </div>
        </div>
    );
}

export default ProfileInfo;