import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
const UserUpdate = () => {
    const [user,setUser] = useState({})
    const {id} = useParams()
    const localUrl = process.env.REACT_APP_LOCAL_URL
    
useEffect(()=>{
    axios.get(`${localUrl}details/${id}`)
    .then(res=>{
        console.log(res);
     setUser(res.data)
    })
},[])
const updateUser = event => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const number = form.number.value;
  axios.put(`${localUrl}update/${id}/`,{
    name,number,
  })
  .then(res=>{
   console.log(res.data);
   toast.success("User updated")
  })
//  form.reset()
  
}

    return (
        <div>
        <div className='flex justify-content-center justify-items-center my-4 home-background'>
               <div className='bg-light p-2 rounded shadow-lg user-form'>
             <h3 className='mb-4'>Update information</h3>
                 <form onSubmit={updateUser}>
                   <div className="mb-3">
                     <label className="form-label">Your Name</label>
       
                     <input defaultValue={user.name} name="name" type="text" placeholder="Your name" className="form-control" />
                   </div>
                   <div className="mb-3">
                     <label className="form-label">Phone Number</label>
       
                     <input defaultValue={user.number} name="number" type="text" className="form-control" pattern="[0-9+]{14}" title="Use only BD Number"  id="exampleFormControlInput1" placeholder="Phone" />
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

export default UserUpdate;