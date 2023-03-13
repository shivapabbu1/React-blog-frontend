import React from 'react'
import  './ReuseComponent.css'

const Toppost = (props) => {
  return (
    <div className='top-div'>
    <div className="top-img">

      <img src={props.img} alt="not found" />
      
         <div className='top-data'>   
         < h5> {props.title}</h5>
          
           <p>{props.article}</p>
           </div>
       </div>



    </div>
  )
}

export default Toppost