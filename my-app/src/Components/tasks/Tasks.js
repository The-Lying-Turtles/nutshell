import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksList from './TasksList'
import TaskForm from './TasksForm'

export default class Tasks extends Component {
    render() {
        return (
            <React.Fragment>
                <TaskForm {...this.props}/>
                <TasksList {...this.props}/>
            </React.Fragment>
        )
    }
}