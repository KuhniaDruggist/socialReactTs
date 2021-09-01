import React from 'react';
import { FriendType } from '../../../redux/navbarReducer';
import style from './BestFriends.module.css';
import FriendItem from "./FriendItem/FriendItem";

type PropsType = {
    bestFriends: FriendType[]
}

const BestFriends = (props: PropsType) => {
    let friendsElements = props.bestFriends.map(friend => <FriendItem key={friend.id} name={ friend.name } id={ friend.id } photo={friend.photo}/>)

    return (
        <div>
            <h3 className={style.title}>Best Friends</h3>
            <ul className={style.friendsList}>
                {friendsElements}
            </ul>
        </div>
    );
};

export default BestFriends;