import {store} from './redux/store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 changeNewPostTitle={store.changeNewPostTitle.bind(store)}
                 changeNewPostText={store.changeNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);