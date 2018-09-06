import React, { Component } from "react"
import "./Message.css"
import MessageManager from '../../modules/MessageManager';

export default class MessageForm extends Component {

    state = {
        messages: [],
        userId: "",
        message: "",
        date: ""
    }
//will need to pull userid from session storage.

    handleFieldChange = evt => {
        // const stateToChange = {}
        // stateToChange[evt.target.id] = evt.target.value

        this.setState({message: evt.target.value, date: Date.now()})
    }

    addMessage = message => MessageManager.post(message)
    .then(() => MessageManager.getAll())
    .then(messages => this.setState({
        messages: messages
    }))

    

    constructNewMessage = evt => {

        evt.preventDefault()

        const newMessage = {
            userId: this.state.userId,
            message: this.state.message,
            date: this.state.date
        }

        this.addMessage(newMessage)
        
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


