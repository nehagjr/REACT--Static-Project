import React from 'react'
import { Hs1,Hs2,Hs3,Hs4,Hs5,Hs6,Hs7 } from './Images/aboutImg'

const Experience = () => {
  return (
    <>
     <div className='imgTxt' style={{backgroundColor:"#f8f7f6"}}>
      <div className='thrty vbigtxt'>Mere Travel Isn’t Enough</div><br/>
      {/* <p>Exploration elevates the spirit</p> */}
     <img src={Hs2} width={"100%"}height={"560px"}/> 
    </div>

    <div  >
      <p  className='vbigtxt'>Epicurean Experiences</p>
      
      <div className='imgTxt'>
      <div ><img src={Hs1} width={"100%"}height={"500px"}/> </div>
      <div className='thrty '>
       <div className='imgTxtArea'>
       {/* <p className='smallfont'>OUR PAST</p><br/> */}
        <p className='bigtxt' style={{textAlign:"start"}}>Weddings and Events</p>
        <p>
        From enchanting weddings to pivotal meetings, our destinations make every gathering matter more.
        </p>
       </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Experience