import React from "react";
// import Navigation from "../Navigation";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
    <h1>Heather Tamisiea</h1>
    {props.children}
  </header>
);
}
export default Header;
