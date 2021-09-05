import React, { useState } from 'react'

import Button from './Button'
import DrumMachine from './DrumMachine'
import Backdrop from './Backdrop'
import Modal from './Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faQuestion } from '@fortawesome/free-solid-svg-icons'


const App: React.FC = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState('')

    return (
        <main id="drum-machine" className='app'>
            <header className='app__header'>
                <h1 className='app__title'>8beat</h1>
                <h2 className='app__version'>v1.1.0</h2>
            </header>

            <aside className='app__buttons'>
                <Button 
                    modalType='theme' 
                    modalOpen={modalOpen}
                    modalTypeHandler={setModalType} 
                    modalOpenHandler={setModalOpen}>
                    <FontAwesomeIcon icon={faCog} />
                </Button>
                <Button 
                    modalType='help' 
                    modalOpen={modalOpen}
                    modalTypeHandler={setModalType} 
                    modalOpenHandler={setModalOpen}>
                    <FontAwesomeIcon icon={faQuestion} />
                </Button>
            </aside>

            <DrumMachine />

            {modalOpen && <Backdrop modalOpenHandler={setModalOpen}/>}

            {modalOpen && <Modal 
                modalType={modalType}
                modalOpen={modalOpen}
                modalOpenHandler={setModalOpen} />}

        </main>
    )
}

export default App
