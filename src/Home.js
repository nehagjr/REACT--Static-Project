import React from 'react'
import { Hs1 ,Hs2,Hs3,Hs4,Hs5,Hs6,Hs7,Hs8,Hm1,Hm2,Hm3,Hm4,Hm5,Hm6,Hm7,Hm8,Hm9,Hm13,Hm14,Hm15,Hm16} from './Images/HomeImg'
const Home = () => {
  return (
    <>
    {/* slide */}
    <div id="slider">
        <div id="slides">
                    <div className="inner">
                        <div class="slide slide_1" width={"95%"} height={"549"}><img src={Hs1} width={"80%"}height={"549"}/> </div>
                        <div class="slide slide_2" width={"95%"} height={"549"}><img src={Hs2} width={"80%"}height={"549"}/></div>
                        <div class="slide slide_3" width={"95%"} height={"549"}><img src={Hs6} width={"80%"}height={"549"}/></div>
                        <div class="slide slide_4" width={"95%"} height={"549"}><img src={Hs4} width={"80%"}height={"549"}/></div>
                        <div class="slide slide_5" width={"95%"} height={"549"}><img src={Hs5} width={"80%"}height={"549"}/></div>
                    </div>
        </div>
      </div>
      {/* booking----------------- */}
      <div className='bookAHolel'>
        <span>Book a Hotel</span>

       <div>
        <p>Dectination</p>
       <input type='text' placeholder='What will you discover'/>
       </div>

       <div>
        <p>Say Dates</p>
       <input type='date' placeholder='--/--/--'/>
       </div>

       <button className='Nbtn'>Reserved Now</button>

      </div>
      
      <div className='imgmid'>
          <img src={Hm1} width={"70%"}height={"549"}/>
      </div>

      <div className='imgmid HolelResorts'>
        <div style={{textAlign:"center"}}>
        <p style={{fontSize:"20px"}}>OUR LATEST DESTINATIONS</p>
        <br/>
        <p className='bigtxt'>New Hotels & Resorts</p>
        </div>
        <div  className='imgmid'>
          <div style={{marginRight:"20px"}}>
            <img src={Hm2} width={"100%"}height={"400px"}/>
            <div  style={{backgroundColor:"#f8f7f6"}}>
            <p className='smallfont'>TBILISI, GEORGIA</p>
            <br/>
            <p className='mediumfont'>Paragraph Freedom Square</p>
            <br/>
            <p style={{fontSize:"18px"}}> Located right in the heart of Tbilisi’s UNESCO old town, Paragraph<br/> Freedom Square               
              celebrates the country’s indigenous charms with <br/> contemporary design and curated authentic               
              experiences.<br/> <br/><br/>
            </p> 

            <p style={{fontSize:"17px"}}>View Property</p>
              
            </div>

          </div>
         
          <div>
            <img src={Hm3} width={"100%"}height={"400px"}/>
            <div style={{backgroundColor:"#f8f7f6"}}>
            <p  className='smallfont'>TBILISI, GEORGIA</p>
            <br/>
            <p className='mediumfont'>Paragraph Freedom Square</p>
            <br/>
            <p style={{fontSize:"18px"}}> Located right in the heart of Tbilisi’s UNESCO old town, Paragraph<br/> Freedom Square               
              celebrates the country’s indigenous charms with <br/> contemporary design and curated authentic               
              experiences.<br/> <br/><br/>
            </p> 

            <p style={{fontSize:"17px"}}>View Property</p>
              
            </div>
          </div>
        </div>
        <button className='Nbtn'>View All Location</button>
      </div>

      <div>
      <p className='bigtxt'>Itineraries</p>
      <div className='imgmid'>
      <div className='threeBox'>
         <img src={Hm4} width={"100%"}height={"240px"}/> 
         <div><br/>
          <p className='smallfont'>ITINERARIES</p><br/>
          <p className='mediumfont'>Greek Islands</p><br/>
         Heritage, Tradition and Magical Sunsets – a<br/> Greek Island Hopping Experience.</div> <br/>
         <button className='Nbtn'>Read More</button>

      </div>

      <div className='threeBox'>
         <img src={Hm5} width={"100%"}height={"240px"}/> 
         <div><br/>
          <p className='smallfont'>ITINERARIES</p><br/>
          <p className='mediumfont'>Spain</p><br/>
         Heritage, Tradition and Magical Sunsets – a<br/> Greek Island Hopping Experience.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>

      <div className='threeBox'>
         <img src={Hm6} width={"100%"}height={"240px"}/> 
         <div><br/>
          <p className='smallfont'>ITINERARIES</p><br/>
          <p className='mediumfont'>United Arab Emirates</p><br/>

         Heritage, Tradition and Magical Sunsets – a<br/> Greek Island Hopping Experience.</div> <br/>
         <button className='Nbtn'>Read More</button>
      </div>
      <br/>   
      </div>
      <div className='imgmid'><button className='Nbtn' style={{width:"270px"}}>Explore All itineraries</button></div> 
      

      
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
         
      </div>
{/* story of inspire */}
      <div >
      <p className='bigtxt'>Stories to Inspire</p>
      <div><img src={Hm13} width={"100%"}height={"650px"}/> </div>
      <div className='imgmid'>
      <img src={Hm14} width={"22%"}height={"480px"}/>
      <div className='storytextarea'>
        <p className='smallfont'>STORIES</p><br/>
        <p className='bigtxt' style={{textAlign:"start"}}>A Paros Getaway</p>
        Discover Paros with Margherita Maccapani Missoni <br/><br/><br/><br/>
        <button className='whitebtn' style={{backgroundColor:"white"}}>Read More</button>
      </div>
      <div style={{width:"22%"}}></div>
      </div>
      </div>
      <center style={{marginTop:"-24px",marginBottom:"-22px", width:"1512.8px", display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Hm15} width={"56%"}height={"480px"}/></center>

      <div >
     
      
      <div className='imgmid'>
      <div style={{width:"22%"}}></div>
      <div className='storytextarea'>
        <p className='smallfont'>STORIES</p><br/>
        <p className='bigtxt' style={{textAlign:"start"}}>Local Knowledge</p>
        <p className='smallfont'>Tokyo</p><br/>
        With spectacular views and elevated touches, this sophisticated oasis shows travelers the peaceful side of one of the world’s busiest cities.<br/><br/><br/><br/>
        <button className='whitebtn' style={{backgroundColor:"white"}}>Read More</button>
      </div>
      <img src={Hm16} width={"22%"}height={"480px"}/>
      
      </div>
     

      </div>
      

    </>
  )
}

export default Home