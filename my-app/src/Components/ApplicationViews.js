import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import LoginManager from '../modules/LoginManager'
import MainView from './MainView'
import MessageManager from '../modules/MessageManager';
import MessageEdit from './messages/MessageEdit';





export default class ApplicationViews extends Component {



    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        articles: [],
        events: [],
        tasks: [],
        messages: []
    }

    componentDidMount(){
        MessageManager.getAll().then(messages => {
            this.setState({
                messages: messages
            })
        })
    }

    user = () => JSON.parse(sessionStorage.getItem("credentials"))

    addMessage = message => MessageManager.post(message)
    .then(() => MessageManager.getAll(this.user().id))
    .then(messages => this.setState({
        messages: messages
    }))

    editMessage = (id, messageObject) => MessageManager.patch(id, messageObject)
    .then(() => MessageManager.getAll())
    .then(messages => this.setState({
        messages: messages
    }))

    

    render() {

        

        return (
            <div className="NutshellView">
                <React.Fragment>
                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView messages={this.state.messages} addMessage={this.addMessage} {...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/mainview" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView messages={this.state.messages} addMessage={this.addMessage} {...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/mainview/message-edit/:messageId(\d+)" render={(props) => {
                        return <MessageEdit {...props}
                        edit={this.editMessage}
                        messages={this.state.messages}/>
                     }} />

                </React.Fragment>
            </div>
        )
    }
}
