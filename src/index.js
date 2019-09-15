import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import Auth from './stores/AuthStore'
import Login from './stores/Login-store'
import Register from './stores/Register-store'
import Recipeform from './stores/Recipe-form-store'
import Landing from './stores/Landing-store'
import User from './stores/User-store'


let auth = new Auth()
let login = new Login()
let register = new Register()
let recipeform = new Recipeform()
let landing = new Landing()
let user = new User()

const stores = { auth, login, register, recipeform, landing, user }


ReactDOM.render(
    <Provider {...stores}>
        <App auth={auth} />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
