import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      date: "",
      userId: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    user = () => JSON.parse(sessionStorage.getItem("credentials"))

    /*
        Local method for validation, creating task object, and
        invoking the function reference passed from parent component
     */
    constructNewTask = evt => {
        evt.preventDefault()
        const newTask = {
            name: this.state.name,
            date: this.state.date,
            status: false,
            userId: this.user().id
        }
        // Create the task and redirect user to mainview
        this.props.addTask(newTask).then(() => this.toggle())
    }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>New Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
          <ModalBody>
              <Form>
                  <FormGroup>
                    <Label for="taskName">Task Name</Label>
                    <Input type="text" name="task" id="name" placeholder="Do something" onChange={this.handleFieldChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="taskDate">Task Date</Label>
                    <Input type="date" name="task" id="date" onChange={this.handleFieldChange}/>
                  </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.constructNewTask}>Save Task</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TaskForm;