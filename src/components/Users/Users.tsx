import React from 'react';
import style from './Users.module.css'
import {UsersPropsType} from './UsersContainer';

function Users(props: UsersPropsType) {
    const users = [
        {
            name: 'Ivan',
            id: 1,
            photos: {
                small: 'https://pbs.twimg.com/media/EgX6nMxUYAAirGg.jpg',
                large: null
            },
            status: 'I love free Belarus',
            followed: true
        },
        {
            name: 'Angelika',
            id: 2,
            photos: {
                small: 'http://www.dejurka.ru/wp-content/uploads/2018/10/cute-cats-draw4.jpg',
                large: null
            },
            status: 'I love my cat Semyon',
            followed: false
        }
    ]

    if (props.users.length === 0) {
        props.setUsers(users);
    }

    return (
        <ul className={style.users}>
            {
                props.users.map(u => {
                    const buttonClass = u.followed ? style.follow : style.unfollow;
                    const onClickToggle = () => props.toggleFollowing(u.id);

                    return (
                        <li className={style.user} key={u.id}>
                            <div className={style.header}>
                                <div className={style.avatarWrapper}>
                                    <img className={style.avatar} alt="Аватар пользователя"
                                         src={u.photos.small != null ? u.photos.small : ''}/>
                                </div>
                                <button className={`${style.button} ${buttonClass}`}
                                        onClick={onClickToggle}>{u.followed ? 'unfollow' : 'follow'}</button>
                            </div>
                            <div className={style.body}>
                                <h3 className={style.name}>{u.name}</h3>
                                <p className={style.status}>{u.status}</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Users