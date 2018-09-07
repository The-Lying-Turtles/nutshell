import React, { Component } from "react"
import Tasks from './tasks/Tasks'
import Articles from './articles/Articles'
import ArticleForm from './articles/ArticleForm'
// import Events from './events/Events'
// import Messages from './messages/MessageList'


class MainView extends Component {
    render() {
        return (
            <React.Fragment>
                <Tasks />
                {/* <Events /> */}
                <Articles {...this.props} />
                {/* <Messages /> */}
            </React.Fragment>
        )
    }
}

export default MainView