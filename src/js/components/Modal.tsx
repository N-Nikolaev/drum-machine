import React from 'react'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'


interface IProps {
    modalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean
    modalType: string
    themeHandler: React.Dispatch<React.SetStateAction<string>>
    themeList: string[]
}

const Modal: React.FC<IProps> = ({
    modalOpenHandler,
    modalOpen,
    modalType,
    themeHandler,
    themeList }) => {

    const modalTypeRender = (type: string): JSX.Element  => {
        switch (type) {
            case 'theme': 
                return (
                    <div className='modal__theme-content'>
                        {themeList.map((theme, idx) => {
                            return (
                                <div 
                                    className='modal__theme-item'
                                    key={idx} 
                                    onClick={() => themeHandler(theme)}>
                                    <div className={`theme theme--${theme}`}/>
                                    <em className='theme__name'>{theme}</em>
                                </div>
                            )
                        })}
                    </div>
                )
            case 'help': 
                return (
                    <div className='modal__instruction-content'>  
                        <h3 className='modal__sub-title'>How to play:</h3>
                        <ul className='modal__list'>
                            <li>The <span className='modal__highlight'>Display box</span> shows the name of beat last hit.</li>
                            <li>The <span className='modal__highlight'>Pad keys</span> can be clicked or pressed down to make an 8-bit drum sound.</li>
                            <li>The <span className='modal__highlight'>volume slider</span> controls the volume of the app.</li>
                            <li>The <span className='modal__highlight'>pallete button</span> opens the theme menu where you can select your theme</li>
                            <li>The <span className='modal__highlight'>question mark</span> button opens the instruction menu.</li>
                        </ul>
                    </div>
                )
            default: 
                return <></>
        }
    }

    return (
        <aside className='modal'>
            <div className='modal__header'>
                <h2 className='modal__title'>
                    {modalType === 'theme' && 'CHARACTER SELECT'}
                    {modalType === 'help' && 'PRESS START'}
                </h2>
                <Button
                    style='button button--back'
                    modalOpen={modalOpen}
                    modalOpenHandler={modalOpenHandler}>
                    <FontAwesomeIcon icon={faReply} />
                </Button>
            </div>
            {modalTypeRender(modalType)}
        </aside>
    )
}

export default Modal
