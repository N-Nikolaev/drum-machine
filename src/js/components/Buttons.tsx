import React from 'react'

interface Props {
    handler: () => void;
}

const Buttons: React.FC<Props> = ({ handler }) => {
    return (
        <button onClick={handler}>
            test
        </button>
    )
}

export default Buttons
