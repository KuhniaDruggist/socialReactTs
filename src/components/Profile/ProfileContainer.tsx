import React from 'react';
import {RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile, UserProfileType} from '../../redux/profileReducer';

//Typing for UsersContainer component props
export type ProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    profile: UserProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);