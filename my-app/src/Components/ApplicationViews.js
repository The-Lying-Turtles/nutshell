import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import LoginManager from '../modules/LoginManager'
import ArticleManager from '../modules/ArticleManager'
import MainView from './MainView'
import ArticleEdit from './articles/ArticleEdit'
import TaskManager from '../modules/TaskManager'
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
        ArticleManager.getAll().then(allArticles => {
            // console.log(allAnimals)

            this.setState({
                articles: allArticles
            })
        })

        TaskManager.getAllOfId("tasks", JSON.parse(sessionStorage.getItem("credentials")).id).then(allTasks => {
            this.setState({
                tasks: allTasks
            })
        })
        MessageManager.getAll().then(messages => {
            this.setState({
                messages: messages
            })
        })
        console.log("blah", this.state.articles)
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

    addArticle = article => ArticleManager.post(article)
        .then(() => ArticleManager.getAll())
        .then(articles => this.setState({
            articles: articles
        }))

    editArticle = (id, articleObject) => ArticleManager.patch(id, articleObject)
    .then(() => ArticleManager.getAll())
    .then(articles => this.setState({
        articles: articles
    }))

    render() {



        return (

                <React.Fragment>
                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView {...props} articles={this.state.articles} addArticle={this.addArticle} tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} editTask={this.editTask} messages={this.state.messages} addMessage={this.addMessage}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/mainview" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <MainView {...props} articles={this.state.articles} addArticle={this.addArticle} tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} editTask={this.editTask} messages={this.state.messages} addMessage={this.addMessage}{...props}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/mainview/message-edit/:messageId(\d+)" render={(props) => {
                        return <MessageEdit {...props}
                        edit={this.editMessage}
                        messages={this.state.messages}/>
                     }} />
                    <Route path="/mainview/articles/edit/:articleId(\d+)" render={(props) => {
                        return <ArticleEdit {...props}
                        editArticle={this.editArticle}
                        articles={this.state.articles}

                        />
                     }} />
                </React.Fragment>

        )
    }
}
