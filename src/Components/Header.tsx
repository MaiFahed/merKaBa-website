// import logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>MerKaBa</h1>
      </div>
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