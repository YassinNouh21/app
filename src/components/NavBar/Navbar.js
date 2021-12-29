import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import "./navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [drop, setDrop] = useState(false);

  const Clicker = () => setClick(!click);
  const closeMenu = () => setDrop(!drop);
  const onMouseEnter = () =>
    window.innerWidth < 960 ? setDrop(false) : setDrop(true);
  const onMouseLeave = () =>
    window.innerWidth < 960 ? setDrop(false) : setDrop(false);
  return (
    <>
      <nav className="navbar">
        <h1>yassin</h1>
        <Link to="./" className="navbar-logo"></Link>
        <div className="menu-icon" onClick={Clicker}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={Clicker ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"
          >
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Our Products
              <i className="fas fa-caret-down space-left"></i>
            </Link>
            {Categories && <Categories/> }
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
