import React, { Component } from 'react'
import './Message.css'
import {Link} from "react-router-dom"


export default class MessageList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="messageButton">
                    <button type="button"
                            className="btn btn-success"
                        //1. 
                            onClick={() => {
                                this.props.history.push("/messages/new")}
                            }>New Message</button>
                </div>

            <section className="messages">
            {
                this.props.messages.map(message =>
                    <div key={message.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {message.name}
                                <button type="button"
                                className="btn btn-success"
                            onClick={() =>  this.props.history.push(`/messages/edit/${message.id}`)}
                            className="card-link">Edit</button>
                               <button
                                    onClick={() => this.props.deleteMessage(message.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
