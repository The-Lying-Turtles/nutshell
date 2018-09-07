
import React, { Component } from 'react'

export default class TasksList extends Component {

    state = {
        edit: false,
        task: null
    }

    // Update state whenever an input field is edited
    handleFieldChange = (whichOne, evt) => {
        const editedTask = this.props.task;
        const stateToChange = whichOne
        editedTask[stateToChange] = evt.target.value
        this.setState({ editedTask })
    }

    user = () => {
        if (localStorage.getItem("credemtials") !== null) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    // changes state for edit to true
    editMode = () => {
        this.setState({ edit: true, task: this.props.task })
    }

    constructEditedTask = evt => {
        evt.preventDefault()
        const task = {
            name: this.state.task.name,
            date: this.state.task.date,
            userId: this.state.task.userId,
            id: this.state.task.id,
            status: this.state.task.status
        }

        // Create the animal and redirect user to animal list
        this.props.editTask(this.state.task.id, task);
        this.setState({ edit: false });
    }

    render() {

        return (
            <React.Fragment>
                {(this.state.edit) ? 
                    <div>
                        <label>Task Name</label>
                        <input type="text" required="true"
                        className="form-control"
                        onChange={(evt) => { this.handleFieldChange("name", evt) }}
                        id="name"
                        value={this.state.task.name} />
                        <label>Task Date</label>
                        <input type="date" required="true"
                        className="form-control"
                        onChange={(evt) => { this.handleFieldChange("date", evt) }}
                        id="date"
                        value={this.state.task.date} />
                        <button onClick={this.constructEditedTask}>Save Edited Task</button>
                    </div>
                :
                    <div>
                        <h5>{this.props.task.name}</h5>
                        <h5>{this.props.task.date}</h5>
                        <label>Task Complete</label>
                        <input type="checkbox" name="completed" value="complete"/>
                        <button onClick={() => this.props.deleteTask(this.props.task.id)}>Delete Task</button>
                        <button onClick={this.editMode}>Edit Task</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}