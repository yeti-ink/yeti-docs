import React from 'react'
import Layout from '@theme/Layout'
import exampleRegister from '../../utils/exampleRegister'
import DemoApplication from '../../containers/DemoApplication'

const page = {
    title: 'Examples',
    description: 'Yeti official exaples',
    keywords: 'nodejs, framework, fantom, yeti, examples, code'
}

const ChatAppExample = () => {
    const entry = exampleRegister.get('chatapp')
    return (
        <Layout title={page.title} description={page.description} keywords={page.keywords}>
            <DemoApplication id={entry.id} label={entry.label} clientFiles={entry.clientFiles} serverFiles={entry.serverFiles}>
                {entry.entryPoint}
            </DemoApplication>
        </Layout>
    )
}

export default ChatAppExample