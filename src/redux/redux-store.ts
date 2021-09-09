import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {navbarReducer} from './navbarReducer';
import {usersReducer} from './usersReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);