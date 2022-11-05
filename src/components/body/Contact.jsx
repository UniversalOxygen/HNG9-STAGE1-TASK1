import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <Link to='/ContactPage'>
          <button id='contact'>Contact Me<br></br> <sub>Get in touch with me</sub></button>
        </Link>
    </div>
  )
}

export default Contact