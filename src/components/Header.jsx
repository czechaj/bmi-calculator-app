import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../img/icon.png";
function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        {" "}
        <img src={Icon} alt="" /> <h3>BMI Calculator</h3>
      </NavLink>
    </header>
  );
}

export default Header;
