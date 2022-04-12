import { Room } from '@rivalis/core'
import ChatActions from './ChatActions'

class ChatAppRoom extends Room {

    onInit() {
        this.use('chat', ChatActions)
    }
}

export default ChatAppRoom