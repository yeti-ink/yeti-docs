import { interfaces } from '@rivalis/core'

class RoomAuth extends interfaces.AuthResolver {

    onAuth(ticket) {
        let room = this.node.get(ticket)
        if (room === null) {
            throw new Error('room does not exist!')
        }
        return room
    }

}

export default RoomAuth