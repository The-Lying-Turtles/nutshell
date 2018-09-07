import React, { Component } from "react"
import Tasks from './tasks/Tasks'
import Articles from './articles/Articles'
// import Events from './events/Events'
import Message from './messages/Message'


class MainView extends Component {

    

    render() {
        return (
            <React.Fragment>
                <Tasks />
                {/* <Events /> */}
                <Articles />
                <Message {...this.props}/>

            </React.Fragment>
        )
    }
}

export default MainView