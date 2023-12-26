import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const WriteNote = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('')
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://solowish.vercel.app/writenote',{title:title,description:description})
        .then(result=>{
            if(result.data=='Success')
            {
                navigate('/home');
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div class='writenote'>
        <label class='fw-bold'>What's on your mind?</label>
        <input placeholder='Title' className='titleText' onChange={e=>setTitle(e.target.value)}/>
        <textarea onChange={(e)=>setDescription(e.target.value)}  placeholder='What made you happy recently<3' className='styleText'></textarea>
        <button class='btn btn-outline-info'>Post</button>
    </div>
</form>
 </>
  )
}

export default WriteNote
