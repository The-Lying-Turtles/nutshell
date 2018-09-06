import React, { Component } from "react"
import "./Message.css"


export default class MessageEdit extends Component {

    componentDidMount () {
        const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId, 0)) 
        this.setState(message)
              
    }
    
    // Set initial state
    state = {
            username:"",
            message:""
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
    handleSubmit = evt => {
        evt.preventDefault()
        
            const message = {
                name: this.state.name,
                type: this.state.type,
                employeeId: conditionEmployee ? this.state.employeeId : this.props.employees.find(e => e.name === this.state.employeeId).id
            }
              

            // Create the message and redirect user to message list
            console.log("message", message)
            this.props.editMessage(this.props.match.params.messageId, message).then(() => this.props.history.push("/messages"))
            
        }
       
    };

    render() {
        
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="EditMessage">Edit Message</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.message}
                               placeholder="Edit Message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" 
                               defaultValue={this.state.type}
                               placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={this.state.employeeId} name="employee" id="employeeId"
                                onChange={this.handleFieldChange}>
                            <option defaultValue={this.state.employeeId}>Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit-edit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}

