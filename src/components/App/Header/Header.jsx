import Navigation from "../Navigation/Navigation";
import "../Header/Header.css";

function Header() {
  return  (
    <header className="header">
      <h1 className="header__logo">Weather Mood</h1>

      <Navigation />
    </header>
  );
}

export default Header;

