import React from 'react'

interface IProps {
    openModalHandler: React.Dispatch<React.SetStateAction<boolean>>
}

const Backdrop: React.FC<IProps> = ({ openModalHandler }) => {
    const exitModal = (): void => {
        openModalHandler(false);
    }

    return <div className='backdrop' onClick={exitModal}/>
}

export default Backdrop
