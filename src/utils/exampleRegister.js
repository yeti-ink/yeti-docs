import React from 'react'

import ChatApp from '../demos/chatapp/ChatApp'

/**
 * @typedef Entry
 * @property {string} id
 * @property {string} label
 * @property {React.Component} entryPoint
 * @property {Array<string>} clientFiles 
 * @property {Array<string>} serverFiles 
 */

class ExampleRegister {

    /**
     * @private
     * @type {Map<string,Entry>}
     */
    demos = new Map()

    /**
     * 
     * @param {string} id 
     * @param {string} label
     * @param {React.Component} entryPoint 
     * @param {Array<string>} clientFiles 
     * @param {Array<string>} serverFiles 
     */
    add(id, label,entryPoint, clientFiles, serverFiles) {
        this.demos.set(id, { id, label, entryPoint, clientFiles, serverFiles })
    }

    /**
     * 
     * @param {string} id
     * @returns {Entry} 
     */
    get(id) {
        return this.demos.get(id) || null
    }

    /**
     * @returns {Array<Object<string,any>>}
     */
    getList() {
        let list = []
        this.demos.forEach(entry => {
            list.push({ id: entry.id, label: entry.label })
        })
        return list
    }

}

let register = new ExampleRegister()

register.add('chatapp', 'ReactJS Chat Application', <ChatApp />, ['ChatApp.js'], ['ChatAppRoom.js', 'ChatActions.js'])

export default register