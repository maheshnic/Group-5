import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{
      backgroundColor: "#001F5B",
      padding: "1rem",
      width: "100%"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        color: "white"
      }}>
        {/* Navigation Menu */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/list-candidate">List Candidate</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/terms">Terms</NavLink>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "0.5rem 1rem"
    }}
  >
    {children}
  </Link>
);

export default Header;