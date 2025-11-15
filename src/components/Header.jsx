import { useState } from "react";

function Header({ width }) {
  const [activeHeader, setActiveHeader] = useState(false);
  return (
    <div className="header">
      <nav className="navbar">
        {!activeHeader ? (
          <img
            src=" ./src/assets/images/icon-hamburger.svg"
            alt=""
            className="hamburger"
            onClick={() => setActiveHeader(!activeHeader)}
          />
        ) : (
          <img
            src="./src/assets/images/icon-close.svg"
            className="close"
            onClick={() => setActiveHeader(!activeHeader)}
          />
        )}
        <img src="./src/assets/images/logo.svg" alt="" className="nav-logo" />
      </nav>{" "}
      {activeHeader || width >= 768 ? (
        <ul className="nav-list">
          <li className="nav-item">home</li>
          <li className="nav-item">shop</li>
          <li className="nav-item">about</li>
          <li className="nav-item">contact</li>
        </ul>
      ) : null}
      {activeHeader && <div className="modal"></div>}
    </div>
  );
}

export default Header;
