import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import LoginManager from '../modules/LoginManager';




export default class ApplicationViews extends Component {



    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

   state = {
           
   }

   addMessage = message => MessageManager.post(message)
    .then(() => MessageManager.getAll())
    .then(messages => this.setState({
        messages: messages
    }))

   render() {

        return (
            <div className="NutshellView">
            <React.Fragment>
                <Route path="/login" component={Login} />
                
            </React.Fragment>
            </div>
        )}



    }