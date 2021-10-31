import React from 'react';
import style from './Users.module.css'
import userPhotoDefault from '../../assets/img/user.png';
import { UsersContainerPropsType } from './UsersContainer';
import Pagination from '../common/Pagination';

//Typing for Users component props
type UsersPropsType = {
    onPageChanged: (page: number) => void
}

function Users(props: UsersContainerPropsType & UsersPropsType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
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
                                             src={u.photos.small != null ? u.photos.small : userPhotoDefault}/>
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
            <Pagination pagesCount={pagesCount}
                        rangePages={3}
                        marginPages={3}
                        onPageChanged={props.onPageChanged}
            />
        </div>
    );
}

export default Users