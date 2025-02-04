import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <h1 className="logo">Logo</h1>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
