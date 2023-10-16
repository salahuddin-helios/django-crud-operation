import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate()
const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      navigate(from, { replace: true });
      //  setIsAuth(true); 
     }
   }, []);

  const submit = async e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
     };
    // Create the POST requuest
    const {data} = await                                                                            
                   axios.post('http://localhost:8000/token/',
                   user ,{headers: 
                  {'Content-Type': 'application/json'}},
                  {withCredentials: true}
                  );

   // Initialize the access & refresh token in localstorage.      
   localStorage.clear();
   localStorage.setItem('access_token', data.access);
   localStorage.setItem('refresh_token', data.refresh);
   axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
   toast.success('Login success')
   window.location.href = '/'
}


 
    return (
      <div className="Auth-form-container user-form text-light">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title font-bold text-center">Login</h2>
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
     <p className='mt-2 text-sm'>New to Hyper_helios? <Link to={'/register'}>Register</Link></p>
   </div>
    );
};

export default Login;