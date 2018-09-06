import React, { Component } from "react"
import Tasks from './tasks/Tasks'
import Articles from './articles/Articles'
// import Events from './events/Events'
// import Messages from './messages/MessageList'


class MainView extends Component {
    render() {
        return (
            <React.Fragment>
                <Tasks {...this.props}/>
                {/* <Events /> */}
                <Articles />
                {/* <Messages /> */}
            </React.Fragment>
        )
    }
}

export default MainView