// import { useState } from "react";
// import { Link } from "react-router-dom";


function NavBar(props) {


  return (
    // className="navbar navbar-dark bg-dark"
    // className="navbar navbar-expand-lg bg-light"
    <nav className="navbar navbar-dark bg-dark" >    
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Employee Management System
        </a>
        
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            
          </form>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
