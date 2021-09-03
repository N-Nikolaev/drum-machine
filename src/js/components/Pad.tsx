import React, { useState, useEffect } from 'react'

interface IProps {
    keyTrigger: string
    keyName: string
    url: string
    volume: number,
    keyDisplayHandler: React.Dispatch<React.SetStateAction<string>>
}

const Pad: React.FC<IProps> = ({ 
        keyTrigger, 
        keyName, 
        url, 
        volume, 
        keyDisplayHandler }) => {

    const playPadSound = (): void => {
        const audio = document.getElementById(`${keyTrigger}`) as HTMLAudioElement
        audio.play()
        audio.volume = volume
        keyDisplayHandler(keyName)
    }

    const keyDownHandler = (e: KeyboardEvent): void => {
        // Case insensitive comparison
        if (e.key.toLocaleUpperCase() === keyTrigger.toLocaleUpperCase()) {
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
            id={`${keyTrigger}-pad`}
            className='drum-pad pad'
            onClick={clickHandler}>
                {keyTrigger}
                <audio
                    id={keyTrigger}
                    className="clip"
                    src={url}>
                </audio>
        </button>
    )
}

export default Pad
