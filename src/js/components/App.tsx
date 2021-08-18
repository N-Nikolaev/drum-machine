import React from 'react'
import Button from './Button'

const App: React.FC = () => {
    return (
        <main className='app'>
            <header className='app__header'>
                <h1 className='app__title'>Poundit</h1>
                <h2 className='app__version'>V 0.0.1</h2>
            </header>

            <aside className='app__buttons'>
                <Button handler={() => null}>Buttons Text</Button>
                <Button handler={() => null}>Buttons Text</Button>
            </aside>

            <section className="app__content">
                

            </section>
        </main>
    )
}

export default App
