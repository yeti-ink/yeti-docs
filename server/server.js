import http from 'http'
import express from 'express'
import { WebSocketTransport, Node } from '@rivalis/core'
import RoomAuth from './RoomAuth'
import WebServer from './WebServer'
import ChatAppRoom from './demos/chatapp/ChatAppRoom'

const expressApp = express()

const httpServer = http.createServer(expressApp)
const webServer = new WebServer(expressApp)
webServer.initialize()

const webSocket = new WebSocketTransport({
    server: httpServer
})

const node = new Node({
    auth: new RoomAuth(),
    transports: [ webSocket ]
})

httpServer.listen(2334, () => {
    node.run()
    node.create('chat_app', ChatAppRoom, {})
})