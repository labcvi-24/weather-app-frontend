import { NavLink, useLocation  } from "react-router-dom";
import "./Navigation.css";




function Navigation() {
  const location = useLocation();

  return  (
    <nav className="navigation">
      {location.pathname !== "/" && (
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          Home
        </NavLink>
      )}

      {location.pathname !== "/about" && (
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          About
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;





