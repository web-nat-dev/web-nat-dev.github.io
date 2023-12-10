import { useState } from 'react'

import { GlobalState } from './contexts/globalContext'

import Dev from './components/Dev'
import Header from './components/Header'
import Footer from './components/Footer'

import data from './content/data.json'

export default function App() {
    document.title = data.page.title

    // eslint-disable-next-line
    const [state, setState] = useState(data)

    return (
        <GlobalState.Provider value={{ state }}>
            {state.dev === true ? <Dev /> : (
                <>
                    <Header />
                </>
            )}
            <Footer />
        </GlobalState.Provider>
    )
}
