import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Users from './Users';
import {setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, UsersType} from '../../redux/usersReducer';
import {RootStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';

//Typing for UsersContainer component props
export type UsersContainerPropsType = mapStatePropsType & mapDispatchPropsType

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

class UsersContainer extends React.Component<UsersContainerPropsType> {

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
        return (
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setUsers={this.props.setUsers}
                   toggleFollowing={this.props.toggleFollowing}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setCurrentPage={this.props.setCurrentPage}
                   onPageChanged={this.onPageChanged}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);