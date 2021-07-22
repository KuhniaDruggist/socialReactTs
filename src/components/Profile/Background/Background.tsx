import React from 'react';
import style from './Background.module.css';

function Background() {
    return (
        <div className={style.background}>
            <img alt="Фон профайла" src="https://images.wallpaperscraft.ru/image/tekstura_fon_tekst_simvoly_50473_1920x1080.jpg" />
        </div>
    );
}

export default Background;