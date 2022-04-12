import { ActionRouter, Schema } from '@rivalis/core'

const ChatMessage = Schema.define({
    text: Schema.Type.STRING
})

class ChatActions extends ActionRouter {

    onInit() {
        this.handle('message', ChatMessage, ChatMessage, this.handleMessage)
    }

    handleMessage = (actorId, data) => {
        return data
    }
}

export default ChatActions