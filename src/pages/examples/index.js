import React from 'react'
import Layout from '@theme/Layout'
import DemoGrid from '../../containers/DemoGrid'
import exampleRegister from '../../utils/exampleRegister'

const page = {
    title: 'Examples',
    description: 'Yeti official exaples',
    keywords: 'nodejs, framework, yeti, ftm, btc, defi, examples, code'
}

const Examples = () => {

    return (
        <Layout title={page.title} description={page.description} keywords={page.keywords}>
            <DemoGrid demos={exampleRegister.getList()} />
        </Layout>
    )
}

export default Examples