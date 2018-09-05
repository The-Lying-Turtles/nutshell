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
        

    }


}