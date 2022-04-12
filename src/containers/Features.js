import clsx from 'clsx'
import React, { Component } from 'react'
import CodeBlock from '@theme/CodeBlock'
import ContentWrapComponent from '../components/ContentWrapComponent'

import styles from './features.module.css'

class Features extends Component {
    render() {
        const { title = '[TITLE HERE]', texts = [], code='[CODE HERE]', features = [] } = this.props
        return (
            <>
                <ContentWrapComponent theme="light">
                    <div className={clsx('container')}>
                        <div className={clsx('row')}>
                            <div className={clsx('col col--6', styles.text_col)}>
                                <h3>{title}</h3>
                                {texts.map((text, index) => <p key={index} className={clsx(styles.p_special)}>{text}</p>)}
                            </div>
                            <div className={clsx('col col--6', styles.code_snippet)}>
                                <CodeBlock className="language-bash">{code}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </ContentWrapComponent>
                <ContentWrapComponent theme="dark">
                    <div className={clsx('container')}>
                        <div className={clsx('row')}>
                            <div className={clsx('col col--12')}>
                                <h3 className={clsx(styles.h_special)}>Features</h3>
                            </div>
                            {features.map(feature => this.renderFeature(feature))}
                        </div>
                    </div>
                </ContentWrapComponent>
            </>
        )
    }

    renderFeature({ key = Math.random(), title, description, image_url, image_alt  }) {
        return (
        <div key={key} className={clsx('col col--4')}>
            <div className={clsx(styles.feature_block)}>
                <img src={image_url} className={clsx(styles.feature_icon)} alt={image_alt} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
    }
}

export default Features