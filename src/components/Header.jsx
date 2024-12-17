import React, { useState } from "react";
import "./Header.css"

const Header = ({ goToHome }) => (
  <header className="header">
    <h1 className="header-title" onClick={goToHome} style={{ cursor: "pointer" }}>
      MovieMania
    </h1>
    <p className="header-subtitle">Your hub for the best movies</p>
  </header>
);

export default Header