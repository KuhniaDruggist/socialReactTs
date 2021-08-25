import {store} from './redux/store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);