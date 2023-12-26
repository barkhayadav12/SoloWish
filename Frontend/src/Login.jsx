import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://solowish.vercel.app/login',{email,password})
        .then(result=>{
            if(result.data==="Successfully logged in!")
            {
                navigate('/home');

            }
        })
        .catch(error=>console.log(error));
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}>
      <form onSubmit={handleSubmit} class='border p-4 py-5 rounded'>
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
          Login
        </button>
        <p class="text-muted mt-2">Don't have an account?</p>
        <button class="btn btn-success" style={{width:'300px'}}><Link to="/" class="text-decoration-none text-white">Register</Link></button>
      </form>
    </div>
  );
};

export default Login;
