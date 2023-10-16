import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Components/Reduce/Cart_Context';
const Navbar = () => {
  const {UserProduct,UserProductDetail} = useCartContext()
  const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
      }
    }, [isAuth]);

const logOut =async()=>{
  localStorage.clear()
  // axios.post('http://localhost:8000/logout/',{
  //   refresh_token:localStorage.getItem('refresh_token')
  //   } ,{headers: 
      
  //     {'Content-Type': 'application/json'},
  //   },  
  //   {withCredentials: true});
  //   localStorage.clear()
  //   axios.defaults.headers.common['Authorization'] = null;
           window.location.href = '/'
}

    return (
      <nav className="navbar p-0 navbar-backgrund navbar-expand-lg navbar-light bg-light">
      <div  style={{backgroundColor:'#9B00CA'}} className="container-fluid p-2 shadow-lg">
          <Link className="navbar-brand text-light font-weight-bold" href="#">Hyper_Helios</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
              </ul>
              <ul className="navbar-nav">
              <li className="nav-item">
                      <Link className="nav-link text-light"to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to={'/list'}>All Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to={'/product/'}>Products</Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link text-light" to={'/cart/'}>Cart <span className="badge bg-primary badge-secondary">{UserProductDetail.cart?.carts}</span></Link>
                  </li>
                  <li className="nav-item">
                   {
                    isAuth ?
                    <Link onClick={logOut} className="nav-link text-light">Logout</Link>
                    :
                    <Link to={'/login'} className="nav-link text-light">Login</Link>
                   }
                  </li>
                  
              </ul>
          </div>
      </div>
  </nav>
    );
};

export default Navbar;