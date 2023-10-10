import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {

  const AddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const user = {
        name,
        number
    }
    axios.post('http://127.0.0.1:8000/create',user)
    .then(res=>{
     console.log(res.data);
    
     toast.success("User created")
    //  showUser();
    })
    console.log(user);
  }
 
    return (
            <div>
 <div className='flex justify-content-center justify-items-center my-4 home-background'>
        <div className='bg-light p-2 rounded shadow-lg uer-form'>
      <h3 className='mb-4'>Add your information</h3>
          <form onSubmit={AddUser}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>

              <input name="name" type="text" placeholder="Your name" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>

              <input name="number" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
            </div>
            <div className="mb-3">
              <input className="btn btn-primary form-control" type="submit" value="Submit" />
            </div>
          </form>
        </div>

      
      </div>
    </div>
    );
};

export default Home;