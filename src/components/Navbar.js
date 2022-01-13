import React from "react";
import logo from "./navlogo.png";
import {
    Link
} from "react-router-dom";

function Navbar() {
    const onClick=(e)=>{
       e.preventDefault();
       console.log("clicked")
   }
    return (
        <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#ed7700",
      }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="94"
              height="84"
              className="d-inline-block align-text-center"
            />
          </Link>
          
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <form className="d-flex" style={{cursor:"pointer"}} onClick={onClick}>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                              <i className="fas fa-search fixed position-absolute z-99 "
                              type="button"
                              style={{
                                  left: "100px",
                                  fontFamily: "Font Awesome 5 Free",
                                  top: "35px",
                                  border: "none",
                                  fontSize: "18px",
                                  pointerEvents:"none",
                                  zIndex:"99"

                                }}
                              ></i>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="          |    Search"
                            aria-describedby="basic-addon1"                           
                            style={{
                                borderRadius: "50px",
                                border: "none",
                                top: "7px",
                                cursor: "pointer",
                                pointerEvents:"none",
                                height: '69px',
                                width: '500px',
                                marginLeft: '82px',
                                
                            }}
                          />
                        </div>
                      </form>
                      
                    <ul className="navbar-nav me-auto w-100 justify-content-end" style={{
                        fontSize: "16px",
                        fontWeight:"700"
                          }}>
                      <li className="nav-item">
                        <Link className="nav-link active mx-4" aria-current="page" to="/Home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link mx-4" to="/pt">
                          Personal Training
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link mx-4" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link mx-4" to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link mx-4" to="/partner">
                          Become a Partner
                        </Link>
                      </li>
                        <li className="nav-item d-block" style={{ backgroundColor:"#ff000047" }}>
                          <Link className="nav-link mx-4" style={{ color:"white" }} to="/login">
                          <i className="far fa-user mx-4"></i> 
                          Sign In
                          </Link>
                        </li>
                      {/* <div className="dropdown">
                        <input
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          placeholder="Search"
                          role="button"
                          style={{
                            width: "200px",
                            height: "30px",
                            borderRadius: "50px",
                          }}
                        />
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                        <button className="dropdown-item" type="button">
                        Action
                        </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Another action
                            </button>
                          </li>
                          <li>
                          <button className="dropdown-item" type="button">
                              Something else here
                            </button>
                          </li>
                          </ul>
                        </div> */}
                    </ul>
                  </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
