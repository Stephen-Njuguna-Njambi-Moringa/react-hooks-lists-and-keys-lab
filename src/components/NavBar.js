import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>
    {/* display an <a> tag for each link here */}
    
    <a key={1} href="#home">home</a>
    <a key={2} href="#about">about</a>
    <a key={3} href="#projects">projects</a>
  </nav>;
 
  

}

export default NavBar;
