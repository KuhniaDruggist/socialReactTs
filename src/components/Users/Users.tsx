import React from 'react';
import style from './Users.module.css'
import userPhotoDefault from '../../assets/img/user.png';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';
import Pagination from '../common/Pagination';

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <ul className={style.users}>
                    {
                        this.props.users.map(u => {
                            const buttonClass = u.followed ? style.follow : style.unfollow;
                            const onClickToggle = () => this.props.toggleFollowing(u.id);

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
                            onPageChanged={this.onPageChanged}
                />
            </div>
        );
    }

}

export default Users