import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to={"/"}> BMI CALCULATOR </NavLink>
    </header>
  );
}

export default Header;
