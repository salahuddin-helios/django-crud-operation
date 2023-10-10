import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav class="navbar p-0 navbar-backgrund navbar-expand-lg navbar-light bg-light">
      <div  style={{backgroundColor:'#9B00CA'}} class="container-fluid p-2 shadow-lg">
          <a class="navbar-brand text-light font-weight-bold" href="#">Hyper_Helios</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
              </ul>
              <ul class="navbar-nav">
              <li class="nav-item">
                      <Link class="nav-link text-light"to={'/'}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link text-light" to={'/users'}>All Users</Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
    );
};

export default Navbar;