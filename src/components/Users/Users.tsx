import React from 'react';
import style from './Users.module.css'
import userPhotoDefault from '../../assets/img/user.png';
import Pagination from '../common/Pagination/Pagination';
import {UsersType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';

//Typing for Users component props
type UsersPropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (selected: number) => void
    setUsers: (users: UsersType[]) => void
    toggleFollowing: (userId: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

function Users(props: UsersPropsType) {
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
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img className={style.avatar} alt="Аватар пользователя"
                                                 src={u.photos.small != null ? u.photos.small : userPhotoDefault}/>
                                        </NavLink>
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