import React from 'react'

interface IProps {
    modalTypeHandler?: React.Dispatch<React.SetStateAction<string>>
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean
    modalType?: string
    style: string
    children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
        modalTypeHandler, 
        modalOpenHandler,
        modalOpen,
        modalType, 
        style, 
        children }) => {
            
    const modalHandler = ():void => {
        if(modalTypeHandler && modalType) {
            modalTypeHandler(modalType)
        }
        modalOpenHandler(!modalOpen)
    }

    return (
        <button className={style} onClick={modalHandler}>
            {children}
        </button>
    )
}

export default Button
