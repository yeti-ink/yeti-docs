import { cwd } from 'process'
import path from 'path'
import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'

class WebServer {

    /**
     * @private
     * @type {express.Express}
     */
    express = null

    /**
     * 
     * @param {express.Express} express 
     */
    constructor(express) {
        this.express = express
    }

    initialize() {
        this.express.use(json())
        this.express.use(cors())
        this.express.disable('x-powered-by')
        this.setupRouters()
    }

    /**
     * @private
     */
    setupRouters() {
        
    }

}

export default WebServer