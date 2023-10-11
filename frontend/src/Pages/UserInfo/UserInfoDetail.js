import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './UserInfo.css'
const UserInfoDetail = () => {
    const [user,setUser] = useState({})
    const {id} = useParams()

    
useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/details/${id}`)
    .then(res=>{
     setUser(res.data)
    })
},[])

    return (
        <div className='user-detail text-light text-center my-4'>
           <img className='rounded-circle img-fluid'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU" alt="" />
          <div>
          <h3 class='card-name text-center'>User Name: {user.name}</h3>
          <p class='card-id'>User id: {user.id}</p>
        <p class='card-phone'>Phone Number: {user.number}</p>
        <button className='btn btn-primary'>Contact</button>
          </div>
        </div>
    );
};

export default UserInfoDetail;