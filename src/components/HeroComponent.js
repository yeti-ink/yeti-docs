import clsx from 'clsx'
import React from 'react'
import Link from '@docusaurus/Link'

import styles from './hero.module.css'

export default ({
    title = '[YOUR TITLE HERE]',
    description = '[YOUR DESCRIPTION HERE]',
    button_label = '[BUTTON LABEL HERE]',
    button_url = '#',
    image_url = '',
    image_alt = '',
    children
}) => (
    <header className={clsx(styles.hero)}>
        <div className="container">
            <div className="row">
                <div className={clsx('col col--6')}>
                    <div className={styles.hero_text}>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <Link className={clsx('button button--outline button--primary button--lg', styles.hero_button)} to={button_url}>{button_label}</Link>
                    </div>
                </div>
                <div className={clsx('col col--6')}>
                    <img src={image_url} alt={image_alt} />
                </div>
            </div>
            {children}
        </div>
    </header>
)