import React, { useState } from 'react'

import Button from './Button'
import DrumMachine from './DrumMachine'
import Backdrop from './Backdrop'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faQuestion } from '@fortawesome/free-solid-svg-icons'


const App: React.FC = () => {

    const [modalOpen, setModalOpen] = useState(true)

    return (
        <main id="drum-machine" className='app'>
            <header className='app__header'>
                <h1 className='app__title'>8beat</h1>
                <h2 className='app__version'>v1.1.0</h2>
            </header>

            <aside className='app__buttons'>
                <Button handler={() => null}>
                    <FontAwesomeIcon icon={faCog} />
                </Button>
                <Button handler={() => null}>
                    <FontAwesomeIcon icon={faQuestion} />
                </Button>
            </aside>

            <DrumMachine />

            {modalOpen && <Backdrop openModalHandler={setModalOpen}/>}
        </main>
    )
}

export default App
