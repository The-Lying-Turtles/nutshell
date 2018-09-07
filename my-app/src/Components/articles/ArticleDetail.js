import React, { Component } from "react"
import ArticleManager from '../../modules/ArticleManager'
import { Link } from "react-router-dom"


export default class ArticleDetail extends Component {


        // componentDidMount(){
        //     ArticleManager.getAll('allArticles').then(allArticles => {
        //         // console.log(allAnimals)

        //         this.setState({
        //             allArticles: allArticles
        //         })
        //     })
        // }

    render() {


        return (
            <section className="article">
            {
                this.props.articles.map(article =>
                <div key={article.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">

                            Article Name: {article.ArticleName}
                        </h4>
                        <h6 className="card-title">Synopsis: {article.Synopsis}</h6>
                        <h6 className="card-title">Website: {article.URL}</h6>

                        <Link className="nav-link" to={`/mainview/articles/edit/${article.id}`}>edit</Link>
                        {/* <button type="button"
                                className="btn btn-success"
                            onClick={() =>  this.props.history.push(`/mainview/articles/edit/${article.id}`)}
                            className="card-link">Edit</button> */}
                        {/* <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.article.id)
                                            .then(() => this.props.history.push("/articles"))}
                            className="card-link">Delete</a> */}
                    </div>
                </div>
                )
            }
            </section>
        )

    }
}