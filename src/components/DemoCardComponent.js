import clsx from 'clsx'
import React from 'react'
import Link from '@docusaurus/Link'
import styles from './democard.module.css'

const DemoCardComponent = ({ id, label }) => {

    let imageRef = React.createRef()

    return (
        <Link to={`/examples/${id}`}>
            <div className={clsx(styles.demo_card)}>
                <img ref={imageRef} onError={() => {
                   imageRef.current.src = '/img/examples/default.png'
                }} src={`/img/examples/${id}.png`} />
                <div className={clsx(styles.demo_card_label)}>{label}</div>
            </div>
        </Link>
    )

}

export default DemoCardComponent