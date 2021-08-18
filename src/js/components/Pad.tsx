import React from 'react'

interface Props {
    keyCode: number;
    keyTrigger: string;
    id: string;
    url: string;
}

const Pad: React.FC<Props> = (props) => {

    const keyDownHandler = (e: Event): void => {
        console.log(e)
    }

    return (
        <button className='pad'>
            
        </button>
    )
}

export default Pad
