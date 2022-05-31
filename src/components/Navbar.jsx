import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
   return (
      <div className="navbar">
 <Link to={"/"}>
 <img
               className="icon"
               src="https://cdn-icons-png.flaticon.com/512/882/882704.png"
               alt=""
            />
         </Link>
         < NavbarLinks/>

        
         
      </div>
   );
};

export default Navbar;