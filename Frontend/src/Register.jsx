import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3003/',{username,email,password})
        .then(result=>navigate('/login'))
        .catch(error=>console.log(error));
    }
  return (
    <div
      className="registerStyle"
    >
    <h2 style={{fontFamily:'cursive',color:'violet'}}>SoloWhisper</h2>
      <form onSubmit={handleSubmit} class='border p-4 py-4 rounded'>
      <div class="form-group" className="divStyle">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            style={{width:'300px'}}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            style={{width:'300px'}}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary mt-3" style={{width:'300px'}}>
          Register
        </button>
        <p class="text-muted mt-2">Already have an account?</p>
        <button class="btn btn-success" style={{width:'300px'}}><Link to='/login' class="text-decoration-none text-white">Login</Link></button>
      </form>
    </div>
  );
};

export default Register;