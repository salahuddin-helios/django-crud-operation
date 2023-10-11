import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar p-0 navbar-backgrund navbar-expand-lg navbar-light bg-light">
      <div  style={{backgroundColor:'#9B00CA'}} className="container-fluid p-2 shadow-lg">
          <a className="navbar-brand text-light font-weight-bold" href="#">Hyper_Helios</a>
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
              </ul>
          </div>
      </div>
  </nav>
    );
};

export default Navbar;