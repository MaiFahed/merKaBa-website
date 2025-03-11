// import { useState } from "react";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1>MerKaBa</h1>
      </div>

      {/* <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
      </div> */}

      <nav className="header-nav">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Shop</li>
          <li>Ancient Wisdom</li>
          <li>Practitioner</li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="sign-in">Sign In</button>
      </div>
    </header>
  )
}

export default Header