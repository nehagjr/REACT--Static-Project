import React from 'react'
import { Hm10,Hm11,Hm12 } from './Images/HomeImg'
const Footer = () => {
  return (
   <>
    <div className='footer'>
      <div>
        <p>OUR PROPERTIES</p>
        <p>ABOUT</p>
        <p>EXPERIENCES</p>
        <p>EDITORIALS</p>
        <p>RESIDENCES</p>
      </div>

      <div>
        <p> MARRIOTT.COM</p>
        <p>STORE</p>
        <p>TEAMS OF USE</p>
        <p>PRIVACY STATEMENT</p>
      </div>

      <div>
        <p style={{fontSize:"25px"}}>Stay Connected</p>
        <img src={Hm11} width={"150px"}height={"50px"}/><br/>
        <img src={Hm12} width={"150px"}height={"50px"}/>
      </div>

      <div className='imgPart'>
      <img src={Hm10} width={"300px"}height={"200px"}/>
      <div>
        <div></div>
        <div style={{fontSize:"12px", lineHeight:"1"}}>
        EXPLORE THE POSSIBILITIES<br/>
        WHAT YOU NEED,<br/>
        WHEN YOU NEED IT.<br/>
       

        </div>
      </div>

      </div>

    </div>
    <div className='sFoooter'>
    Copyright © 2024 Marriott International, Inc. All Rights Reserved. Marriott Proprietary Information
<ul className='sFoooter'>
<li>Terms of Use</li>
<li>Privacy and Cookie Statement</li>
<li>Help</li>
<li>Tracking Preferences</li>
<li>Your Privacy Rights</li>
</ul>

    </div>
   </>
  )
}

export default Footer