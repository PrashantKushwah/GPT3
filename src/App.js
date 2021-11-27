import React from 'react'
import './App.css'
import {Blog, Features, Header, Footer, Possibility, WhatGPT3} from './container'
import {Article, CTA, Brand, Feature, Navbar} from './components'

const App = () => {
    return (
        <div className = 'App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            
        </div>
    )
}

export default App
