import React from 'react'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'


interface IProps {
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean
    modalType: string
}

const Modal: React.FC<IProps> = ({
    modalOpenHandler,
    modalOpen,
    modalType }) => {

    const modalTypeRender = (type: string): JSX.Element  => {
        switch (type) {
            case 'theme': 
                return (
                    <div>
                        {modalType} modal
                    </div>
                )
            case 'help': 
                return (
                    <div>
                        {modalType} modal
                    </div>
                )
            default: 
                return <></>
        }
    }

    return (
        <aside className='modal'>
            <Button
                modalOpen={modalOpen}
                modalOpenHandler={modalOpenHandler}>
                    <FontAwesomeIcon icon={faReply} />
            </Button>
           {modalTypeRender(modalType)}
        </aside>
    )
}

export default Modal
