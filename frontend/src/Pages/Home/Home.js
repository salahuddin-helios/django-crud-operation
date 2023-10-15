import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
  const [formData, setFormData] = useState(null)
  // const [buttonDisabled, setButtonDisabled] = useState(true)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const handleChange =(e)=>{
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(formData);
  // }



  // const AddUser = event => {
  //   event.preventDefault();
  //   axios.post('http://127.0.0.1:8000/create/',formData)
  //   .then(res=>{
  //    console.log(res.data);
    
  //    toast.success("User created")
  //   //  showUser();
  //   })
  // }



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
   console.log('Token created');
   window.location.href = '/'
}


 
    return (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
   </div>
    );
};

export default Home;