import React from 'react'

interface IProps {
    modalTypeHandler?: React.Dispatch<React.SetStateAction<string>>
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean
    modalType?: string
    children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
        modalTypeHandler, 
        modalOpenHandler,
        modalOpen,
        modalType, 
        children }) => {
            
    const modalHandler = ():void => {
        if(modalTypeHandler && modalType) {
            modalTypeHandler(modalType)
        }
        modalOpenHandler(!modalOpen)
    }

    return (
        <button className='button' onClick={modalHandler}>
            {children}
        </button>
    )
}

export default Button
