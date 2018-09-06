import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import TaskManager from '../modules/TaskManager'
import MainView from './MainView'


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
    }
    user = () => JSON.parse(sessionStorage.getItem("credentials"))

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

    render() {

        return (
            <div className="NutshellView">
                <React.Fragment>
                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} {...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/mainview" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} {...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                </React.Fragment>
            </div>
        )
    }
}