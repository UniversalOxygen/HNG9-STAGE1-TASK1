import React from 'react'
import Img from './images/myProfile.png'
import shareBtn from './images/share.png'
import menuBtn from './images/menu.png'


const Header = () => {
  return (
    <div>
      <div id='menuCon'>
        <img id='shareBtn' src={shareBtn} alt="share button" />
        <img id='menuBtn' src={menuBtn} alt="menu button" />
      </div>
      <div id='profileSection'>
        <img id='profile_img' src={Img} alt="Profile Image" />
        <h1 id='twitter'>UniversalOxygen</h1>
        <h2 id='slack'>OXYGEN</h2>
      </div>
    </div>
  )
}

export default Header

