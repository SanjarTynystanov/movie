import React from "react";
import "./Header.css";

const Header = ({goToHome, setCurrentPage }) => {
  const handleNavigateToRegister = () => {
    setCurrentPage("register");
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo" onClick={goToHome} >MovieMania</h1>
        <input
          type="text"
          className="header-search"
          placeholder="Search for movies..."
        />
        <button onClick={handleNavigateToRegister} className="header-register">Register</button>
      </div>
    </header>
  );
};

export default Header;
