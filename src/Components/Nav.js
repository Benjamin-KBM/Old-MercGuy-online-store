import React from "react";
import Display from "./Display";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css";

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.addUser.isLoggedIn);
  return (
    <nav style={{ height: "3rem" }}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">Cart</NavLink>
        </li>
        <div className="d-flex flex-row-reverse w-75">
          {isLoggedIn ? <Display /> : null}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
