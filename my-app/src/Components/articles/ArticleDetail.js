import React, { Component } from "react"
// import "./Animals.css"
// import dog from "./DogIcon.png"



export default class ArticleDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        // const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId)) || {}

        return (
            <section className="animal">
                <div key={this.props.article.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">

                            Article Name: {this.props.article.ArticleName}
                        </h4>
                        <h6 className="card-title">Synopsis: {this.props.article.Synopsis}</h6>
                        <h6 className="card-title">Website: {this.props.article.URL}</h6>
                        {/* <button type="button"
                                className="btn btn-success"
                            onClick={() =>  this.props.history.push(`/animals/edit/${article.id}`)}
                            className="card-link">Edit</button> */}
                        {/* <a href="#"
                            onClick={() => this.props.deleteAnimal(article.id)
                                            .then(() => this.props.history.push("/articles"))}
                            className="card-link">Delete</a> */}
                    </div>
                </div>
            </section>
        )
    }
}