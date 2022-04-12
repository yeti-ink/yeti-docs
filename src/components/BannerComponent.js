import clsx from 'clsx'
import React from 'react'
import Link from '@docusaurus/Link'

import styles from './banner.module.css'

const themes = new Map()
themes.set('dark', styles.theme_dark)
themes.set('discord', styles.theme_discord)
themes.set('github', styles.theme_github)

export default ({ url = '', text = '[YOUR TEXT HERE]', description = '[YOUR DESCRIPTION HERE]', theme = 'dark' }) => (

    <div className={clsx(styles.banner, themes.get(theme) || styles.theme_dark)}>
        <div className={clsx('container')}>
            <div className={clsx('row')}>
                <div className={clsx('col col--12')}>
                    {description}
                    <Link className={clsx('button button--outline button--primary button--md', styles.button)} to={url}>{text}</Link>
                </div>
            </div>
        </div>
    </div>
)