import React from 'react'

interface IProps {
    modalTypeHandler: React.Dispatch<React.SetStateAction<string>>
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
    modalType: string
    children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
        modalTypeHandler, 
        modalOpenHandler,
        modalType, 
        children }) => {
            
    const modalHandler = ():void => {
        modalTypeHandler(modalType)
        modalOpenHandler(true)
    }

    return (
        <button className='button' onClick={modalHandler}>
            {children}
        </button>
    )
}

export default Button
