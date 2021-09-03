import React, { useState } from 'react'

const VolumeSlider: React.FC = () => {
    const [volume, setVolume] = useState(0.5)

    const log = (value: string): void => {
        console.log(value)
    }
    return (
        <div>
            <input 
                className='volumeSlider'
                max='1'
                min='0'
                step='0.1'
                type='range'
                onChange={(e) => log(e.target.value)}/>
        </div>
    )
}

export default VolumeSlider
