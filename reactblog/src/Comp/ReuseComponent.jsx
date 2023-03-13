import React from 'react'
import './ReuseComponent.css'
import { Link } from 'react-router-dom'

const ReuseComponent = (props) => {
  console.log(props);
  return (
    <>
    <div className='parent'>
      <div className='image-container'>
    <Link to="/singlepage" state={props}>
            <img src={props.img} alt="error"/>
    </Link>
    </div> 
           <div className='comp-data'>   
            <p className='article'>{props.article}</p>
            <p className='title'>{props.title}</p>
            <p className='date'>{props.date}</p>
            </div> 

    </div> 
    </>
  )
}

export default ReuseComponent