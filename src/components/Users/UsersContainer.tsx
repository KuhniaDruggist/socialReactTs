import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Users from './Users';
import {setUsers, toggleFollowing, UsersType} from '../../redux/usersReducer';
import {RootStateType} from '../../redux/redux-store';

//Typing for Users component props
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    users: UsersType[]
}

type mapDispatchPropsType = {
    setUsers: (users: UsersType[]) => void
    toggleFollowing: (userId: number) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users))
        },
        toggleFollowing: (userId: number) => {
            dispatch(toggleFollowing(userId))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);