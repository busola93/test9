import React, {useState, useEffect} from "react";
import Menuitems from "./Menuitems";                                                                                                                                                                                                                                               from "react";


const NavBar = () => {

  return (
 <nav className "py-4 bg-light">
   <div className= "container">
      <img width="70px" src ="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"/>
  
      <Menuitems />
  </div>
  </nav>;

  );
};

export default Navbar;
