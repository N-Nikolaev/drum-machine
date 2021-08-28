import React, { useState } from 'react'
import Display from './Display'
import Pad from './Pad'

interface IState {
    drumPads: {
        key: string,
        url: string,
    }[]
}

const DrumMachine: React.FC = () => {
    const [keys] = useState<IState['drumPads']>([
        { key: 'q', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { key: 'w', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { key: 'e', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { key: 'a', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { key: 's', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { key: 'd', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { key: 'z', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { key: 'x', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' }, 
        { key: 'c', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
    ]);

    return (
        <article className="drumMachine">
            <Display padName='' />
            <section className='drumMachine__drum-pads'>
                {keys.map((keyTrigger: {key: string, url: string}) => {
                    return (
                        <Pad 
                            key={keyTrigger.key} 
                            keyTrigger={keyTrigger.key} 
                            url={keyTrigger.url}/>
                    )
                })}
            </section>
        </article>
    )
}

export default DrumMachine
