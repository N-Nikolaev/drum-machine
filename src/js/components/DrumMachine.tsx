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

    const srcURL = "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Commodore%2064%208bit%20SID%20Drums"

    const [keys] = useState<IState['drumPads']>([
        { key: 'Q', url: `${srcURL}/9[kb]c64sid-ch1.wav.mp3` },
        { key: 'W', url: `${srcURL}/5[kb]c64sid-ch2.wav.mp3` },
        { key: 'E', url: `${srcURL}/7[kb]c64sid-ch3.wav.mp3` },
        { key: 'A', url: `${srcURL}/17[kb]c64sid-clptom.wav.mp3` },
        { key: 'S', url: `${srcURL}/13[kb]c64sid-cometom2.wav.mp3` },
        { key: 'D', url: `${srcURL}/17[kb]c64sid-kick5.wav.mp3` },
        { key: 'Z', url: `${srcURL}/13[kb]c64sid-fokick.wav.mp3` },
        { key: 'X', url: `${srcURL}/12[kb]c64sid-fosn.wav.mp3` }, 
        { key: 'C', url: `${srcURL}/33[kb]c64sid-gabkick2.wav.mp3` },
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
