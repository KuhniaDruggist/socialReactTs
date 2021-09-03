import {connect} from 'react-redux';
import {FriendType} from '../../../redux/navbarReducer';
import BestFriends from './BestFriends';
import {RootStateType} from '../../../redux/redux-store';

//Typing for BestFriends component props
export type BestFriendsPropsType = MapStatePropsType

type MapStatePropsType = {
    bestFriends: FriendType[]
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        bestFriends: state.navbar.bestFriends
    }
}

export const BestFriendsContainer = connect(mapStateToProps)(BestFriends);