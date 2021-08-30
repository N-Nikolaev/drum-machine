import React, { useState } from 'react'
import Display from './Display'
import Pad from './Pad'

interface IState {
    drumPads: {
        key: string
        name: string
        url: string
    }[]
}

const DrumMachine: React.FC = () => {

    const srcURL = "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Commodore%2064%208bit%20SID%20Drums"

    const [keys] = useState<IState['drumPads']>([
        { key: 'Q', name: 'SOU 001', url: `${srcURL}/13[kb]c64sid-Sou001.wav.mp3` },
        { key: 'W', name: 'Ch 2', url: `${srcURL}/5[kb]c64sid-ch2.wav.mp3` },
        { key: 'E', name: 'Ch 3', url: `${srcURL}/7[kb]c64sid-ch3.wav.mp3` },
        { key: 'A', name: 'Clap Tom', url: `${srcURL}/17[kb]c64sid-clptom.wav.mp3` },
        { key: 'S', name: 'Come Tom', url: `${srcURL}/13[kb]c64sid-cometom2.wav.mp3` },
        { key: 'D', name: 'Kick', url: `${srcURL}/17[kb]c64sid-kick5.wav.mp3` },
        { key: 'Z', name: 'Fo Kick', url: `${srcURL}/13[kb]c64sid-fokick.wav.mp3` },
        { key: 'X', name: 'FO Snare', url: `${srcURL}/12[kb]c64sid-fosn.wav.mp3` }, 
        { key: 'C', name: 'Gab Kick', url: `${srcURL}/33[kb]c64sid-gabkick2.wav.mp3` },
    ]);

    const [currentPad, setCurrentPad] = useState('')

    return (
        <article className="drumMachine">
            <Display padName={currentPad} />
            <section className='drumMachine__drum-pads'>
                {keys.map((keyTrigger: {key: string, name: string, url: string}) => {
                    return (
                        <Pad 
                            key={keyTrigger.key} 
                            keyTrigger={keyTrigger.key} 
                            keyName={keyTrigger.name}
                            url={keyTrigger.url}
                            keyDisplayHandler={setCurrentPad}/>
                    )
                })}
            </section>
        </article>
    )
}

export default DrumMachine
