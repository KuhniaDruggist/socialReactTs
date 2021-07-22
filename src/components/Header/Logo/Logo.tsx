import React from 'react';
import style from './Logo.module.css';

function Logo() {
    return (
        <div className={style.wrapper}>
            <img className={style.logo}
                 src="https://image.freepik.com/free-vector/golden-crown-logo-vector_20448-274.jpg"
                 alt="Логотип соц сети"/>
            <p className={style.name}>Crown</p>
        </div>
    );
}

export default Logo;