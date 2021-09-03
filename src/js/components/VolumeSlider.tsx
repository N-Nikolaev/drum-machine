import React, { useState } from 'react'

interface IProps {
    volumeControlHandler: React.Dispatch<React.SetStateAction<number>>
}

const VolumeSlider: React.FC<IProps> = ({ volumeControlHandler }) => {
    const log = (value: string): void => {
        console.log(value)
    }

    const volumeStringToFloat = (value: string): void => {
        volumeControlHandler(parseFloat(value))
    }

    return (
        <input 
            className='volumeSlider'
            max='1'
            min='0'
            step='0.01'
            type='range'
            onChange={(e) => volumeStringToFloat(e.target.value)}
            //@ts-ignore This is a quirk of Firefox and doesn't break anything
            orient='vertical'/>
    )
}

export default VolumeSlider
