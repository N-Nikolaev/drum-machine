import React from 'react'
import Display from './Display'


const DrumMachine: React.FC = () => {
    return (
        <article className="drum-machine">
            <Display padName='' />
            <section className='drum-machine__drum-pads'>

            </section>
        </article>
    )
}

export default DrumMachine
