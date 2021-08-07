import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import {RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/> } />
                    <Route path='/news' render={ () => <News/> } />
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> } />
                    <Route path='/friends' render={ () => <Friends/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
