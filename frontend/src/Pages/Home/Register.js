import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const register = (e)=>{
    e.preventDefault();
    const user ={
        username,
        email,
        password
    }
    axios.post(`http://127.0.0.1:8000/register/`,user)
    .then(res=>{
        toast.success('User created')
        navigate('/login')
    }).catch(e=>{
        console.log(e);
    })
  }
    return (
        <div className="Auth-form-container user-form text-light">
      <form className="Auth-form" onSubmit={register}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title font-bold text-center">Register</h2>
          <div className="form-group mt-3">
            <label>Username</label>
            <input className="form-control mt-1" 
              placeholder="Enter Username" 
              name='username'  
              type='text' value={username}
              required 
              onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input className="form-control mt-1" 
              placeholder="Enter Username" 
              name='username'  
              type='email' value={email}
              required 
              onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input name='password' 
              type="password"     
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" 
               className="btn btn-primary">Submit</button>
          </div>
        </div>
     </form>
     <p className='mt-2 text-sm'>All ready have an account? <Link to={'/login'}>Login</Link></p>
   </div>
    );
};

export default Register;