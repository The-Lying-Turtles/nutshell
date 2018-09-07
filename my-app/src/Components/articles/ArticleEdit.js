import React, { Component } from "react"

export default class ArticleEdit extends Component {


    // Set initial state
    state = {
        ArticleName: "",
        Synopsis: "",
        URL: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    /*
    Local method for validation, creating animal object, and
    invoking the function reference passed from parent component
    */
   editTheArticle = evt => {
       evt.preventDefault()

       const article = {
           ArticleName: this.state.ArticleName,
           Synopsis: this.state.Synopsis,
           URL: this.state.URL
        }
// console.log("article", article)
        // Create the article and redirect user to article list
        this.props.editArticle(this.props.match.params.articleId, article).then(() => this.props.history.push("/"))
// console.log("bloop", this.props)

    };
            componentDidMount () {
                const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId, 0))
                this.setState(article)
            }

    render() {
        return (
            <React.Fragment>
                <form className="articleForm">

                    <div className="form-group">
                        <label htmlFor="articleName">Article Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ArticleName"
                               defaultValue={this.state.ArticleName}
                               placeholder="Article Name"
                               />
                    </div>
                    <div className="form-group">
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="Synopsis"
                               defaultValue={this.state.Synopsis}
                               placeholder="Synopsis" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="URL"
                               defaultValue={this.state.URL}
                               placeholder="URL" />
                    </div>


                    <button type="submit" className="btn btn-primary" id="submit-edit" onClick={this.editTheArticle}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}
