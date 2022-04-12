import clsx from 'clsx'
import React, { Component } from 'react'
import ContentWrapComponent from '../components/ContentWrapComponent'
import DemoCardComponent from '../components/DemoCardComponent'

class DemoGrid extends Component {
    
    
    render() {
        const DEMO_PER_ROW = 3
        let demoList = []
        for (let [ index, demo ] of (this.props.demos || []).entries()) {
            let rowNumber = Math.floor(index / DEMO_PER_ROW)
            if (demoList.length == rowNumber) {
                demoList.push([])
            }

            demoList[rowNumber].push({ index, id: demo.id, label: demo.label })
        }
        return (
            <ContentWrapComponent>
                <div className={clsx('container')}>
                    {demoList.map((row, index) => (
                        <div key={index} className={clsx('row')}>
                            {row.map(item => (
                                <div key={item.index} className={clsx('col col--4')}>
                                    <DemoCardComponent id={item.id} label={item.label} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </ContentWrapComponent>
        )
    }
}

export default DemoGrid