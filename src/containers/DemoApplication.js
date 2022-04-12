import clsx from 'clsx'
import Tabs from '@theme/Tabs'
import CodeBlock from '@theme/CodeBlock'
import TabItem from '@theme/TabItem'
import React, { Component } from 'react'
import ContentWrapComponent from '../components/ContentWrapComponent'
import styles from './demoapp.module.css'


const code = `const { Node, WebSocketTransport, interfaces } = require('@rivalis/core')

class Auth extends interfaces.AuthResolver {
    onAuth = (ticket) => this.node.get('my_game_room')
}
const gameserver = new Node({
    auth: new Auth(), // implement your own authorization flow
    transports: [ new WebSocketTransport() ] // use one or multiple protocols
})
gameserver.run()
`

/**
 * @typedef SourceFile
 * @property {string} fileName
 * @property {string} sourceCode
 */

class DemoApplication extends Component {

    state = {
        /** @type {Array<SourceFile>} */
        clientFiles: [],

        /** @type {Array<SourceFile>} */
        serverFiles: [],

        loaded: false
    }

    componentDidMount() {
        this.loadFiles(this.props.id)
    }

    render() {
        const { children, id, label } = this.props
        const { clientFiles, serverFiles, loaded } = this.state

        return (
            <>
                <ContentWrapComponent theme="dark">
                <div className={clsx('container', styles.container)}>
                    <div className={clsx('row')}>
                        <div className={clsx('col col--12')}>
                            {children}
                        </div>
                    </div>
                </div>
                </ContentWrapComponent>
                {loaded ? (
                    <div className={clsx('container', styles.container)}>
                    <div className={clsx('row')}>
                        <div className={clsx('col col--6')}>
                            <h3>Client code</h3>
                            
                            <Tabs defaultValue={clientFiles[0].fileName}>
                                {clientFiles.map(file => (
                                    <TabItem key={file.fileName} value={file.fileName} label={file.fileName}>
                                        <CodeBlock className="language-js">{file.sourceCode}</CodeBlock>
                                    </TabItem>
                                ))}
                            </Tabs>
                        </div>
                        <div className={clsx('col col--6')}>
                            <h3>Server code</h3>
                            <Tabs defaultValue={serverFiles[0].fileName}>
                                {serverFiles.map(file => (
                                    <TabItem key={file.fileName} value={file.fileName} label={file.fileName}>
                                        <CodeBlock className="language-js">{file.sourceCode}</CodeBlock>
                                    </TabItem>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
                ) : (
                    <></>
                )}
            </>
        )
    }

    async loadFiles(id) {
        const { clientFiles, serverFiles } = this.props
        let clientSources = []
        let serverSources = []
        for (let file of clientFiles) {
            let source = await this.loadFile(id, 'client', file)
            clientSources.push({
                fileName: file,
                sourceCode: source
            })
        }

        for (let file of serverFiles) {
            let source = await this.loadFile(id, 'server', file)
            serverSources.push({
                fileName: file,
                sourceCode: source
            })
        }
        this.setState({
            clientFiles: clientSources,
            serverFiles: serverSources,
            loaded: true
        }) 
    }

    /**
     * @param {string} id
     * @param {('client'|'server')} source 
     * @param {string} name 
     */
    async loadFile(id, source, name) {
        let url = null
        let hash = `${id}:${source}:${name}`
        if (source === 'client') {
            url = `https://raw.githubusercontent.com/yeti-ink/yeti-docs.github.io/main/src/demos/${id}/${name}`
        } else if (source === 'server') {
            url = `https://raw.githubusercontent.com/yeti-ink/yeti-docs.github.io/main/server/demos/${id}/${name}`
        }

        let cached = sessionStorage.getItem(hash)
        if (cached !== null) {
            return cached
        }

        let response = await fetch(url)
        let sourceCode = await response.text()
        sessionStorage.setItem(hash, sourceCode)
        return sourceCode
    }

}

export default DemoApplication