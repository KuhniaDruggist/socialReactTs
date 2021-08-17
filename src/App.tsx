import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import {StateType} from './redux/store';

type AppPropsType = {
    state: StateType
    addPost: () => void
    changeNewPostTitle: (title: string) => void
    changeNewPostText: (text: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              changeNewPostTitle={props.changeNewPostTitle}
                                                              changeNewPostText={props.changeNewPostText}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
