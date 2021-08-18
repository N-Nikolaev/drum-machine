import React from 'react'

interface Props {
    keyTrigger: string;
    id?: string;
    url?: string;
}

const Pad: React.FC<Props> = (props) => {

    // TODO Write event listeners for keydown and click

    const keyDownHandler = (): void => {
        const event = new KeyboardEvent('keydown', {
            key: props.keyTrigger
        })
        console.log({keyEvent: event})
    }

    const clickHandler = ():void => {

    }

    return (
        <button 
            id={props.keyTrigger}
            className='pad'
            onKeyDown={keyDownHandler}
            onClick={clickHandler}>
                {props.keyTrigger}
        </button>
    )
}

export default Pad
