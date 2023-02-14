import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);
  return (
    <header>
      <div className="container">
        <a href="" className="header__logo">
          <img src="/images/logo.svg" alt="header logo" />
        </a>
        <nav>
          <button
            className={`nav__icon ${state ? "active" : ""}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav__links ${state ? "active" : ""}`}>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <button className="header__btn primary__btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
