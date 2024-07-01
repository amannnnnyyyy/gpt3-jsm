import React from 'react'
import { Blog, Feature, Footer, Header, WhatGPT3, Possibility } from './containers'
import {Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand />
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
