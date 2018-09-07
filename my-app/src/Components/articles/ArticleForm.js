import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ArticleManager from '../../modules/ArticleManager'

class ModalExample extends React.Component {

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
// addArticle = article => ArticleManager.post(article)
//         .then(() => ArticleManager.getAll())
//         .then(articles => this.setState({
//             articles: articles
//         }))

constructNewArticle = () => {


        const newArticle = {
            ArticleName: this.state.ArticleName,
            Synopsis: this.state.Synopsis,
            URL: this.state.URL
        }

        // Create the animal and redirect user to animal list
        this.props.addArticle(newArticle).then(() => this.props.history.push("/"))
        this.toggle()

    }

    // module below
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}> &times; </button>;
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>New Article{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
                    <ModalHeader>New Article</ModalHeader>
                    <ModalBody>
                    <div className="form-group">

                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ArticleName" placeholder="Title" />

                        <textarea rows="4" cols="55" required="true"
                        onChange={this.handleFieldChange}
                        className="form-control" id="Synopsis" placeholder="Synopsis"></textarea>

                        <input type="url" name="url" required="true"
                        onChange={this.handleFieldChange}
                        className="form-control" id="URL" placeholder="URL"></input>
                    </div>
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.constructNewArticle}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;
