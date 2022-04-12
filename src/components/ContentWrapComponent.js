import clsx from 'clsx'
import React from 'react'

import styles from './content_wrap.module.css'

export default ({ theme = 'transparent', children }) => (
    <div className={clsx(styles[`theme_${theme}`])}>
        {children}
    </div>
)