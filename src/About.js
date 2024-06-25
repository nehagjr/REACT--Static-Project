import React from 'react'
import { Hs1,Hs2,Hs3,Hs4,Hs5,Hs6,Hs7 } from './Images/aboutImg'

const About = () => {
  return (
    <>
    <div className='imgTxt' style={{backgroundColor:"#f8f7f6"}}>
      <div className='thrty vbigtxt'>Our Story</div>
     <img src={Hs1} width={"100%"}height={"560px"}/> 
    </div>

    <div  >
      <p  className='vbigtxt'>History and Heritage</p>
      
      <div className='imgTxt'>
      <div ><img src={Hs2} width={"100%"}height={"500px"}/> </div>
      <div className='thrty '>
       <div className='imgTxtArea'>
       <p className='smallfont'>OUR PAST</p><br/>
        <p className='bigtxt' style={{textAlign:"start"}}>From the dawn of the Modern Era</p>
        <p>
        A little over a century ago, the era of steamships and trains let explorers travel with ease for the first time. One popular destination was Venice, at the heart of the Mediterranean and a crossroads between East and West.<br/>
        <br/>
        The unique appeal of Venice is why, in 1906, the Compagnia Italiana Grandi Alberghi (CIGA) was founded as a hotel brand accommodating travelers to this storied destination. We trace our heritage back to CIGA, which became The Luxury Collection brand in 1994.
        </p>
       </div>
      </div>
      
    </div>
    </div>


    
    <div>
    <div className='imgTxt'>
     
      <div className='thrty '>
       <div className='imgTxtArea'>
       <p className='smallfont'>OUR PRESENT</p><br/>
        <p className='bigtxt' style={{textAlign:"start"}}>Elevating Travel Today</p>
        <p>
        For the global explorer, The Luxury Collection offers a gateway to the world’s most exciting and desirable destinations. We are proud to carry on the traditions that shaped our heritage as we embark on journeys as transformative as they are unforgettable.
        </p>
       </div>
      </div>
      <div ><img src={Hs3} width={"109%"}height={"400px"}/> </div>
      
    </div>
    </div>

    <div className='imgmid'>
      <div className='threeBox'>
         <img src={Hs4} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Clara Diez</p><br/>
          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>

      </div>

      <div className='threeBox'>
         <img src={Hs5} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Shiona Turini</p><br/>
          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>

      <div className='threeBox'>
         <img src={Hs6} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Calvin Royal III</p><br/>

          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>
      <br/>   
      </div>
    </>
  )
}

export default About