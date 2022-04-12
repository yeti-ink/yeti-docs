import clsx from 'clsx'
import React from 'react'

import styles from './wave_decor.module.css'

export default () => (
    <div className={clsx(styles.wave_wrap)}>                     
        <div className={clsx(styles.wave_animation)}>
            <div className={clsx(styles.wave_top)}>
                <div className={clsx(styles.wave_bg, styles.wave_bg_top)}></div>
            </div>
            <div className={clsx(styles.wave_middle)}>
                <div className={clsx(styles.wave_bg, styles.wave_bg_middle)}></div>
            </div>
            <div className={clsx(styles.wave_bottom)}>
                <div className={clsx(styles.wave_bg, styles.wave_bg_bottom)}></div>
            </div>
        </div>
    </div>
)