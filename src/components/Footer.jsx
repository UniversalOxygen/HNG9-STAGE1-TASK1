import React from 'react'
import Zuri from './images/Vector.png'
import I4G from './images/I4G.png'

const Footer = () => {
  return (
    <div>
      <hr />
      <div id='footer'>
        <img id='zuriImage' src={Zuri} alt="Zuri internship" />
        <p>HNG Internship 9 Frontend Task</p>
        <img id='i4gImage' src={I4G} alt="I4g image" />
      </div>
    </div>
  )
}

export default Footer