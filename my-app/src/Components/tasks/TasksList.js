import React, { Component } from 'react'

export default class TasksList extends Component {
    render() {

        return (
            <React.Fragment>
                <section className="tasks">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id}>
                                <div>
                                    <h5>{task.name}</h5>
                                    <h5>{task.date}</h5>
                                    <label>Task Complete</label>
                                    <input type="checkbox" name="completed" value="complete"/>
                                    <button onClick={() => this.props.deleteTask(task.id)}>Delete Task</button>
                                    <button>Edit Task</button>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}