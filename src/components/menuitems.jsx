import React from "react";
import { Link } from "react-router-dom";

export default function Menuitems() {
return (
<ul className= "list-unstyled-float-end menu-items" >
   <li>
   <Link to="/">Home</Link>
   </li>
<li>
  <Link to="/about">about</Link>
</li>
<li>
  <a href="">services</a>
</li>
<li>
  <a href="">Contact</a>
</li>
 </ul>
);

}