import React, { Component } from "react"
import "./Message.css"

export default class MessageForm extends Component {

    state = {
        username: "",
        message: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        evt.preventDefault()

        const newMessage = {
            username: this.state.username,
            message: this.state.message,
        }

        this.props.addMessage(newMessage).then(() => this.props.history.push("/mainview"))
        

    }

    render() {
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="NewMessage">New Message</label>
                        <textarea rows="20" cols="30" 
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="addMessage"
                               placeholder="New Message"></textarea>
                    </div>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Save</button>
                </form>
            </React.Fragment>
        )
    }
}


