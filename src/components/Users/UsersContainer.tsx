import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Users from './Users';
import {setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, UsersType} from '../../redux/usersReducer';
import {RootStateType} from '../../redux/redux-store';

//Typing for Users component props
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

type mapDispatchPropsType = {
    setUsers: (users: UsersType[]) => void
    toggleFollowing: (userId: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users))
        },
        toggleFollowing: (userId: number) => {
            dispatch(toggleFollowing(userId))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);