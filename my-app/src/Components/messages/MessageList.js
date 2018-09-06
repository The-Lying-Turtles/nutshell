import React, { Component } from 'react'
import './Message.css'
import {Link} from "react-router-dom"
import MessageManager from '../../modules/MessageManager';
import MessageForm from './MessageForm';



export default class MessageList extends Component {

    state = {
        messages:[]
    }


    componentDidMount() {
        
            MessageManager.getAll('messages')
              .then(messages => {
                this.setState({ messages: messages });
              })
              
        }
    render () {
        return (
            <React.Fragment>
               
            <section className="messages">
            {
                this.state.messages.map(message =>
                    <div key={message.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {message.userId}
                                {message.message}
                                {message.date}
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
