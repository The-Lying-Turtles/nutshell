import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

   state = {
           
   }

   render() {

        return (
            <div className="NutshellView">
            <React.Fragment>
                <Route path="/login" component={Login} />

            </React.Fragment>
            </div>
        )}
    }