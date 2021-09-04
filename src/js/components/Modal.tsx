import React from 'react'

interface IProps {
    children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({children}) => {
    return (
        <aside className='modal'>
            {children}
        </aside>
    )
}

export default Modal
