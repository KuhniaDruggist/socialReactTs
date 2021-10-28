import React from 'react';
import style from './Users.module.css'
import userPhotoDefault from '../../assets/img/user.png';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

class Users extends React.Component<UsersPropsType>{
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
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
        );
    }

}

export default Users