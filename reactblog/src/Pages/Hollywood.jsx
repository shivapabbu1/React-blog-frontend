import React, { useEffect, useState } from 'react'
import ReuseComponent from '../Comp/ReuseComponent';
import Toppost from '../Comp/Toppost';
import './Bollywood.css'
import   axios from 'axios'

const Hollywood = () => {
  const[api,setApi]=useState([]);

  const getdata=async()=>{
    const res=await axios.get('http://localhost:6060/bollywood')
  
    const data=await res.data
    console.log(data);
   setApi(data)
  }
  useEffect(()=>{
getdata()
  //  fetch('http://localhost:6060/bollywood')
  //  .then(res=> res.json())
  //  .then(res => console.log(res))
  },[]);
  return (
  <>
  <div className="main-container"> 
 <div className="left-data"> 
 <h1>HOLLYWOOD</h1>
<div className="comp-div">
{
api.filter((x)=> x.category =='Hollywood')
 .map((value)=>(
 <ReuseComponent key={value.id}
 img={value.img}
 title={value.title}
 article={value.article}


 />



))
}
</div>
<div className="comp-right">
<h1>Topposts</h1>
          {
           api.filter((x)=> x.category =='Hollywood')
              .map((value)=>(
              <Toppost key={value.id}
              img={value.img}
              title={value.title}
              article={value.article}
              />
              ))
          }
         </div> 
         <div className="ad">advertisment</div>
       </div> 
        
      </div>    

</>
  )
}

export default Hollywood