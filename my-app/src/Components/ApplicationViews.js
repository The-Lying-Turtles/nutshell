import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import LoginManager from '../modules/LoginManager'
import ArticleManager from '../modules/ArticleManager'
import MainView from './MainView'
import ArticleEdit from './articles/ArticleEdit'


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
        ArticleManager.getAll('allArticles').then(allArticles => {
            // console.log(allAnimals)

            this.setState({
                articles: allArticles
            })
        })
        console.log("blah", this.state.articles)
    }
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
                            return <MainView {...props} articles={this.state.articles} addArticle={this.addArticle}/>
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/login" component={Login} />


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