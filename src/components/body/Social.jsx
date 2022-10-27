import React from 'react'
import Slack from '../images/slack.png'
import git from '../images/gitmage.png'
const Social = () => {
  return (
    <div id='social'>
        <img src={Slack} alt="slack" />
        &nbsp;
        &nbsp;
        &nbsp;
        <a href="https://github.com/univesalOxygen"><img src={git} alt="github" /></a>
    </div>
  )
}

export default Social