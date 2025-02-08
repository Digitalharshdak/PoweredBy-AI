import React  from "react";
import logo from "../Image/1.png";
const Frame1 = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo"/> 
          </a>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">AI Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Submit Tools">Submit Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Get Featured">Get Featured</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Advertise">Advertise</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/About Us">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Login/Signup</button>
          </div>
        </div>
      </nav>
      </div>
    );
};

export default Frame1;