import React, { useState } from 'react'
import Display from './Display'
import Pad from './Pad'


const DrumMachine: React.FC = () => {
    const [keys, setKeys] = useState([
      'q',
      'w',
      'e',
      'a',
      's',
      'd',
      'z',
      'x',
      'c',  
    ]);

    return (
        <article className="drumMachine">
            <Display padName='' />
            <section className='drumMachine__drum-pads'>
                {keys.map((key: string) => {
                    return <Pad key={key} keyTrigger={key} />
                })}
            </section>
        </article>
    )
}

export default DrumMachine
