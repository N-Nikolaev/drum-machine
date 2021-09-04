import React, { useState } from 'react'

interface IProps {
    volume: number,
    volumeControlHandler: React.Dispatch<React.SetStateAction<number>>
}

const VolumeSlider: React.FC<IProps> = ({ volume, volumeControlHandler }) => {

    const volumeStringToFloat = (value: string): void => {
        volumeControlHandler(parseFloat(value))
    }

    return (
        <input 
            className='volumeSlider'
            max='1'
            min='0'
            step='0.01'
            value={volume}
            type='range'
            onChange={(e) => volumeStringToFloat(e.target.value)} />
    )
}

export default VolumeSlider
