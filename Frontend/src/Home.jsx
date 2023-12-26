import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
const Home = () => {
    const [story,setStory]=useState([])
    useEffect(()=>{
        axios.get('https://solowish.vercel.app/note')
        .then(result=>setStory(result.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <>
      <Navbar/>
    <div className='styleNote'>
    <div>
     </div>
        <div class='notes'>
            {
                story.map((st)=>{
                    return(
                        <Link to={`/readnote/${st._id}`} style={{textDecoration:'none'}}>
                        <div className='noteInd'>
                        <h1 style={{textAlign:'center'}}>{st.title}</h1>
                        <p style={{padding:'5px',letterSpacing:'1px'}} class='text-muted'>{st.description}</p>
                        <div className='readBtn'>
                        <i class="bi bi-caret-right"></i>
                        </div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
    <Footer/>
    </>
  )
}
export default Home;
