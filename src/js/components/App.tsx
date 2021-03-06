import React, { useEffect, useState } from 'react'

import Button from './Button'
import DrumMachine from './DrumMachine'
import Backdrop from './Backdrop'
import Modal from './Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faQuestion } from '@fortawesome/free-solid-svg-icons'


const App: React.FC = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState('')
    const [themeList] = useState([
        'light',
        'dark',
        'mango',
        'chill',
    ])
    const [theme, setTheme] = useState(themeList[0])

    useEffect (()=> {
        document.body.dataset.theme = theme
    }, [theme])

    return (
        <main id="drum-machine" className='app'>
            <header className='app__header'>
                <h1 className='app__title'>8beat</h1>
                <h2 className='app__version'>v1.3.0</h2>
            </header>

            <aside className='app__buttons'>
                <Button 
                    style='button'
                    modalType='theme' 
                    modalOpen={modalOpen}
                    modalTypeHandler={setModalType} 
                    modalOpenHandler={setModalOpen}>
                    <FontAwesomeIcon icon={faPalette} />
                </Button>
                <Button 
                    style='button'
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
                modalOpenHandler={setModalOpen}
                themeHandler={setTheme}
                themeList={themeList} />}

        </main>
    )
}

export default App
