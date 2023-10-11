import React, { useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './UserInfo.css'
const UserInfo = () => {
    const [users,setUser]= useState([])
    const showUser = ()=>{
      axios.get('http://127.0.0.1:8000/list/')
      .then(res=>{
        setUser(res.data)
      })
    }
    useEffect(() => {
      showUser();
    }, []);
    const DeleteUser = (id)=>{
        axios.delete(`http://127.0.0.1:8000/delete/${id}`)
        .then(res=>{
          console.log(res.data);
          toast.success('User deleted')
          showUser();
        })
      }
    return (
        <div className='mt-4 w-75 user-data mt-4'>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Details</th>
              <th scope="col">Update</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

              {
                users.map((user,id)=>
                <tr key={id}>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.number}</th>
                  <th><Link className='btn btn-primary user-button' to={`/details/${user.id}`}>Detail</Link></th>
                  <th><Link className='btn btn-primary user-button' to={`/update/${user.id}`}>Update</Link></th>
                  <th> <button className='btn btn-primary delete-button'  onClick={()=> DeleteUser(user.id)}>X</button></th>
                </tr>
                )
              }
          </tbody>
        </table>
      </div>
    );
};

export default UserInfo;