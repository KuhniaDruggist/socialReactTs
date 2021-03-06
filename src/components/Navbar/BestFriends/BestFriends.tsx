import React from 'react';
import style from './BestFriends.module.css';
import FriendItem from './FriendItem/FriendItem';
import {BestFriendsPropsType} from './BestFriendsContainer';

const BestFriends = (props: BestFriendsPropsType) => {
    let friendsElements = props.bestFriends.map(friend =>
        <FriendItem key={friend.id}
                    name={ friend.name }
                    id={ friend.id }
                    photo={friend.photo}
        />)

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