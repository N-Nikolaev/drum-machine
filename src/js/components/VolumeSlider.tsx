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
        <div>
            <input 
                className='volumeSlider'
                max='1'
                min='0'
                step='0.1'
                type='range'
                onChange={(e) => volumeStringToFloat(e.target.value)}/>
        </div>
    )
}

export default VolumeSlider
