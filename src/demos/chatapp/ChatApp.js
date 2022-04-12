import React, { Component } from 'react'
// import { WebSocket } from '@rivalis/client-browser'
class ChatApp extends Component {

    /**
     * @type {WebSocket}
     */
    client = null

    componentDidMount() {
        // this.client = new WebSocket('ws://localhost:2334')
        // this.client.connect('chat_app')
    }

    componentWillUnmount() {
        // this.client.disconnect()
    }

    render() {
        return (
            <>Chat App</>
        )
    }

}

export default ChatApp