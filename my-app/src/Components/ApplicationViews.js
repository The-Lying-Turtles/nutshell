import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import TaskManager from '../modules/TaskManager'
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

    componentDidMount() {

        // Example code. Make this fit into how you have written yours.
        TaskManager.getAllOfId("tasks", "2").then(allTasks => {
            this.setState({
                tasks: allTasks
            })
        })
        MessageManager.getAll().then(messages => {
            this.setState({
                messages: messages
            })
        })
    }

    user = () => {
        if (localStorage.getItem("credemtials") !== null) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    addTask = task => TaskManager.post("tasks", task)
    .then(() => TaskManager.getAllOfId("tasks", this.user().id))
    .then(allTasks => this.setState({
        tasks: allTasks
    }))

    deleteTask = id => TaskManager.delete("tasks", id)
    .then(() => TaskManager.getAllOfId("tasks", this.user().id))
    .then(allTasks => this.setState({
        tasks: allTasks
    }))

    editTask = (id, editedTask) => TaskManager.patch("tasks", id, editedTask)
    .then(() => TaskManager.getAllOfId("tasks", this.user().id))
    .then(allTasks => this.setState({
        tasks: allTasks
    }))

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
                            return <MainView tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} editTask={this.editTask} messages={this.state.messages} addMessage={this.addMessage} {...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/mainview" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} editTask={this.editTask} messages={this.state.messages} addMessage={this.addMessage}{...props}/>
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
