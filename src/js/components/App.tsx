import React from 'react'
import Button from './Button'
import DrumMachine from './DrumMachine'

const App: React.FC = () => {
    return (
        <main className='app'>
            <header className='app__header'>
                <h1 className='app__title'>Poundit</h1>
                <h2 className='app__version'>v0.0.1</h2>
            </header>

            <aside className='app__buttons'>
                <Button handler={() => null}>B</Button>
                <Button handler={() => null}>B</Button>
            </aside>

            <DrumMachine />
        </main>
    )
}

export default App
