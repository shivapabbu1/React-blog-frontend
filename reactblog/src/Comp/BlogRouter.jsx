import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
 import Food from '../Pages/Food'
 import Singlepage from '../Pages/Singlepage'
const BlogRouter = () => {
  return (
    <>
    <Routes>
    
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/bollywood' element={<Bollywood/>}></Route>
    <Route path='/Hollywood' element={<Hollywood/>}></Route>
    <Route path='/technology' element={<Technology/>}></Route>
    <Route path='/fitness' element={<Fitness/>}></Route>
    <Route path='/food' element={<Food/>}></Route>
    <Route path='/Singlepage' element={<Singlepage/>}></Route>
   

   </Routes>
    </>
  )
}

export default BlogRouter