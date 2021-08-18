import React from 'react'

interface Props {
    handler: () => void;            // TODO: Pass clickHandler and check for side effects
    children?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.handler}>
            {props.children}
        </button>
    )
}

export default Button
