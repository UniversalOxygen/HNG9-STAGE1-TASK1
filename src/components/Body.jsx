import React from 'react'
import TwLink from './body/TwLink'
import ZuriTeam from './body/ZuriTeam'
import ZuriBooks from './body/ZuriBooks'
import PythonBooks from './body/PythonBooks'
import Bck4Coder from './body/Bck4Coder' 
import DesignBook from './body/DesignBook'
import Social from './body/Social'
import Contact from './body/Contact'

const Body = () => {
  return (
    <div>
        <TwLink /> 
        <ZuriTeam />
        <ZuriBooks />
        <PythonBooks />
        <Bck4Coder />
        <DesignBook />
        <Contact />
        <Social />
    </div>
  )
}

export default Body