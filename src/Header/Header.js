import "./Header.css";
import React from "react";
import Logo from './Logo.png'
function Header({webname,headerExpanded}) {
  return (
    <div className="head-container">
      <img className={`head-image ${headerExpanded ? `head-image-expanded`:`head-image-contracted`}`} src={Logo} alt="HeadImg"></img>
      <h1 className={`head-text ${headerExpanded ? `head-text-expanded`:`head-text-contracted`}`}>{webname}</h1>
    </div>
  );
}

export default Header;
