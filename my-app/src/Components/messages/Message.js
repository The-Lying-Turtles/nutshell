import React, { Component } from 'react'
import './Message.css'
import {Link} from "react-router-dom"
import MessageManager from '../../modules/MessageManager';
import MessageForm from './MessageForm';
import MessageList from './MessageList';



class Message extends Component {

    

    render() {
        return (
            <React.Fragment>
                
                <MessageList />
                <MessageForm />
                
            </React.Fragment>
        )
    }
}

export default Message

