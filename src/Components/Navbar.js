import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../App.css';
const Navbar = (props) => {
  // let bg = {
  //   backgroundColor: " #61dafbaa",
  // };
  // let navbg = {
  //   backgroundColor: "rgb(0 17 21 / 67%);",
  // }
  // const [enable ,setdisable ] = useState("Enable darkmode");

  // const toggledark = ()=> {
  //   if (props.mode === 'dark') {
  //     setdisable("Enable darkmode")
  //   }
  //   else{
  //     setdisable("Disable darkmode")

  //   }
  // } 

  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} tosost titlehead`} style={props.bg} > */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} tosost titlehead ${props.mode === 'dark' ? 'darknav' : 'bgprinary' } `}
        // style={bg}
        // style={{backgroundColor: props.mode ===  'light'? bg:''}}
      >
        <div className="container-fluid  ">
          <Link to="/" className="navbar-brand titlehead ">
            <strong>{props.title}</strong>
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
          <div
            className="collapse navbar-collapse container active"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link active titlehead "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link active titlehead "
                  aria-current="page"
                >
                  About 
                </Link>
              </li>

              {/* <li className="nav-item"> 
          <a className="nav-link titlehead" href="/">About</a>
        </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toglemode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
              {props.mode === 'dark' ? "Disable darkmode " : " Enable darkmode"}
              </label>
            </div>
            {/*    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" 
        aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
          </div>      
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Titel Requride",
};

export default Navbar;
