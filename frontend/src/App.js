import './App.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './Information';
import axios from 'axios'
function App() {
  const [users,setUser]= useState([])
  // state ={
  //   items:[],
  //   name: "",
  //   number: ""
  // }
  const showUser = ()=>{
    axios.get('http://127.0.0.1:8000/list')
    .then(res=>{
      setUser(res.data)
    })
  }
  useEffect(() => {
    showUser();
  }, []);


  const handleBooking = event => {
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
    })
    console.log(user);
  }
  const handleDelete = (id)=>{
    // axios.delete('')
  }

  return (
   
    <div>
      <div>
        <h4>Add a User</h4>
        <div>
          {/* <input type="text" placeholder='Your name' value={this.state.name} />
          <input type="text" placeholder='Your name' value={this.state.name} /> */}
        </div>
        <div >
          <h3>All Users</h3>

        
          <form onSubmit={handleBooking}>
                        <input name="name" type="text" placeholder="Your name"/>
                        <input name="number" type="text" placeholder="Your Number" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-accent w-full mt-2" />
                    </form>
          
            <ul>
          
              {
               users.map((user,i)=>(
                   <Information 
                   handleDelete = {handleDelete}
                  user= {user} key={i}
                  />
               ))
              }
            </ul>
        </div>
      </div>
    </div>
   
  );
}

export default App;
