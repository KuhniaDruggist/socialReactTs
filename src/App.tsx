import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import {RootStateType} from './redux/redux-store';
import {DialogsActionTypes} from './redux/dialogsReducer';
import {ProfileActionTypes} from './redux/profileReducer';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: DialogsActionTypes | ProfileActionTypes) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
