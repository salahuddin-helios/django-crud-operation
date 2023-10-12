import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
  const [formData, setFormData] = useState(null)
  // const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  const AddUser = event => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/create/',formData)
    .then(res=>{
     console.log(res.data);
    
     toast.success("User created")
    //  showUser();
    })
  }


 
    return (
            <div>
 <div className='flex justify-content-center justify-items-center my-4'>
        <div className='bg-light p-2 rounded shadow-lg user-form'>
      <h3 className='mb-4'>Add your information</h3>
          <form onSubmit={AddUser}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>

              <input  onChange={handleChange} name="name" type="text" placeholder="Your name" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>

              <input name="number" onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" pattern="[0-9+]{14}" title="Use only BD Number" placeholder="Phone" />
            </div>
            <div className="mb-3">
              <input className="btn btn-primary form-control" disabled={!(formData?.name && formData?.number)} type="submit" value="Submit" />
            </div>
          </form>
        </div>

      
      </div>
    </div>
    );
};

export default Home;