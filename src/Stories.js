import React from 'react'
import { Hs11,Hs12,Hs13,Hs14,Hs15,Hs16,Hs20,Hs17 } from './Images/storiec'
import { Hm7 ,Hm8,Hm9} from './Images/HomeImg'


const Stories = () => {
  return (
    <>
    <div className='imgTxt' style={{backgroundColor:"#f8f7f6"}}>
      <div className='thrty vbigtxt'>Stories to<br/> Inspire</div>
      <p></p>
     <img src={Hs11} width={"100%"}height={"560px"}/> 
    </div>


    {/* <br/><br/> */}

    <center className='vbigtxt'>Inside the Collection</center>
    <center><img src={Hs12} width={"70%"}height={"570px"}/></center>
    <br/><br/>
    <center>Explore a series of captivating hotel stories, destinations and cultures.</center>
    <br/><br/>
    <center><button className='whitebtn' style={{backgroundColor:"white"}}>Learn More</button></center>
    <br/>

    <div className='imgmid'>
      <div className='threeBox'>
         <img src={Hs13} width={"100%"}height={"350px"}/> 
         <div><br/>
          {/* <p className='smallfont'>TASTEMAKERS</p><br/> */}
          <p className='mediumfont' style={{textAlign:"start"}}>150 Years Later, The Imperial Torte’s Legacy </p><br/>
          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>

      </div>

      <div className='threeBox'>
         <img src={Hs14} width={"100%"}height={"350px"}/> 
         <div><br/>
          {/* <p className='smallfont'>TASTEMAKERS</p><br/> */}
          <p className='mediumfont' style={{textAlign:"start"}}>Clara Diez on Travel and Cheese</p><br/>          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>

      <div className='threeBox'>
         <img src={Hs20} width={"100%"}height={"350px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Calvin Royal III</p><br/>

          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>
      <br/>   
      </div>
         




    <div  >
      <p  className='vbigtxt'>History and Heritage</p>
      
      <div className='imgTxt'>
      <img src={Hs15} width={"85%"}height={"500px"}/> 
      <div className='thrty '>
       <div className='imgTxtArea'>
       {/* <p className='smallfont'>OUR PAST</p><br/> */}
        <p className='bigtxt' style={{textAlign:"start"}}>Meet Laila </p>
        <p>
        “Dive into the eccentric, elegant world of our newest Global Explorer”
        </p>
        <br/><br/>
        <button className='whitebtn' style={{backgroundColor:"white"}}>Learn More</button>
       </div>
      </div>
      
    </div>
    </div>


    

    <div>
    <div className='imgTxt'>
     
      <div className='thrty '>
       <div className='imgTxtArea'>
       {/* <p className='smallfont'>OUR PRESENT</p><br/> */}
        <p className='bigtxt' style={{textAlign:"start"}}>Paging Mr. Moser</p>
        <p>
        Meet Michael Moser, Chief Historian at Hotel Imperial, Vienna, who inspired Wes Anderson’s “Mr. Mosher” in Grand Budapest Hotel.         </p>
        <br/><br/>
        <button className='whitebtn' style={{backgroundColor:"white"}}>Learn More</button>
       </div>
      </div>
      <img src={Hs16} width={"75%"}height={"500px"}/>
      
    </div>
    </div>

    <div className='imgmid'>
      <div className='threeBox'>
         <img src={Hm7} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Clara Diez</p><br/>
          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>

      </div>

      <div className='threeBox'>
         <img src={Hm8} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Shiona Turini</p><br/>
          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>

      <div className='threeBox'>
         <img src={Hm9} width={"100%"}height={"650px"}/> 
         <div><br/>
          <p className='smallfont'>TASTEMAKERS</p><br/>
          <p className='mediumfont'>Calvin Royal III</p><br/>

          As the founder of the world-renowned, Madrid-based cheese shop Formaje, Clara Diez finds passion and purpose in conveying the bigger stories of her culinary fascination.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>
      <br/>   
      </div>



      <center><img src={Hs17} width={"70%"}height={"570px"}/></center>
    <br/><br/>
    <center>Explore a series of captivating hotel stories, destinations and cultures.</center>
    <br/><br/>
    <center><button className='whitebtn' style={{backgroundColor:"white"}}>Learn More</button></center>
    <br/><br/><br/><br/>
    </>
  )
}

export default Stories