import { useContext } from 'react'

import { GlobalState } from '../contexts/globalContext'

import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Dev() {
    const { state } = useContext(GlobalState)

    return (
        <div className='container fluid d-flex align-items-center justify-content-center flex-grow-1 text-center'>
            <div className='col-10 col-md-6'>
                <div className='container py-3 rounded-4 bg-body-tertiary'>
                    <div className='row'>
                        <div className='container spin'>
                            <i className='bi bi-gear-fill text-info' style={{ fontSize: '10rem' }} />
                        </div>
                    </div>
                    <h3>On development</h3>
                    <p>{state.devMessage}</p>
                    <ProgressBar animated now={state.progress} />
                </div>
            </div>
        </div>
    )
}