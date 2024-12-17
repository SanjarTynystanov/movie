import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Передача поискового запроса в родительский компонент
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">MovieMania</h1>
        <input
          type="text"
          className="header-search"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="header-register">Register</button>
      </div>
    </header>
  );
};

export default Header;
