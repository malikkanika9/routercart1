import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

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
         <Link to={"/about"}>
         <p style={{color:"White"}}>About Us</p>
         </Link>
         <Link to={"/ipad"}>
         <p style={{color:"White"}}>Ipad</p>
         </Link>
         <Link to={"/iphone"}>
         <p style={{color:"White"}}>Iphone</p>
         </Link>
         <Link to={"/Mac"}>
         <p style={{color:"White"}}>MAcBOOK</p>
         </Link>
         
        
      </div>
   );
};

export default Navbar;