import React from 'react'

interface Props {
    padName: string;
}

const Display: React.FC<Props> = ({ padName }) => {
    return (
        <div>
            { padName }
        </div>
    )
}

export default Display
