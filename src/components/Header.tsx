import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">MovieHub.com</div>
      <nav className="header__nav">
        <ul>
          <li className="navLink">
            <NavLink to="/movies">Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/watchlist">Watch List</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
