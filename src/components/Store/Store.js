import React from 'react'
import Header from '../Header/Header'
import './Store.css'
import StoreLeft from './StoreLeft/StoreLeft'
import StoreRight from './StoreRight/StoreRight'
const Store = () => {
    return (
        <div className='store'>
            <Header />
            <div className='store__Container'>
                <StoreLeft />
                <StoreRight />

            </div>
        </div>
    )
}

export default Store