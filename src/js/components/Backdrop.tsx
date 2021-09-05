import React from 'react'

interface IProps {
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
}

const Backdrop: React.FC<IProps> = ({ modalOpenHandler }) => {
    const exitModal = (): void => {
        modalOpenHandler(false);
    }

    return <div className='backdrop' onClick={exitModal}/>
}

export default Backdrop
