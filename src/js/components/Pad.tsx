import React, { useState, useEffect } from 'react'

interface IProps {
    keyTrigger: string
    url: string
}

const Pad: React.FC<IProps> = ({ keyTrigger, url }) => {

    const [audio] = useState(new Audio(url))

    const playPadSound = (): void => {
        audio.play()
    }

    const keyDownHandler = (e: KeyboardEvent): void => {
        if (e.key === keyTrigger) {
            playPadSound()
        }
    }

    const clickHandler = ():void => {
        playPadSound()
    }

    useEffect(()=> {
        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    },[])

    return (
        <button 
            id={keyTrigger}
            className='pad'
            onClick={clickHandler}>
                {keyTrigger}
        </button>
    )
}

export default Pad
