import React, { useState } from 'react'
import Display from './Display'
import Pad from './Pad'

export interface IState {
    drumPads: {
        key: string,
        url: string,
    }[]
}

const DrumMachine: React.FC = () => {
    const [keys, setKeys] = useState<IState['drumPads']>([
        { key: 'q', url: '' },
        { key: 'w', url: '' },
        { key: 'e', url: '' },
        { key: 'a', url: '' },
        { key: 's', url: '' },
        { key: 'd', url: '' },
        { key: 'z', url: '' },
        { key: 'x', url: '' }, 
        { key: 'c', url: '' },
    ]);

    return (
        <article className="drumMachine">
            <Display padName='' />
            <section className='drumMachine__drum-pads'>
                {keys.map((keyTrigger: {key: string, url: string}) => {
                    return <Pad key={keyTrigger.key} keyTrigger={keyTrigger.key} url={keyTrigger.url}/>
                })}
            </section>
        </article>
    )
}

export default DrumMachine
