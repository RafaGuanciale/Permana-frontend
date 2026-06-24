import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../images/brand/Permana-Logo-Reverse.png"

function Header() {
  const { user } = useContext(UserContext);
  const { isLogged } = useContext(AuthContext);
  const { handleOpenPopup } = useContext(PopupContext);
  const handleChangePopup = () => {
    handleOpenPopup("profile");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isLogged) return null; 
  return (
    <header className="header" id="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__logo" />
        <div className="header__navigation">
          <nav className="header__nav" id="header__nav-user">
            <NavLink to="/dashboard" className="header__nav-link">
              Dashboard
            </NavLink>
            <NavLink to="/collection" className="header__nav-link">
              Coleção
            </NavLink>
            {/* <NavLink to="/analysis" className="header__nav-link">
              Análise
            </NavLink>
            <NavLink to="/recommendation" className="header__nav-link">
              Recomendações
            </NavLink> */}
            <NavLink to="/categories" className="header__nav-link">
              Categorias
            </NavLink>
          </nav>
        </div>
        <div className="header__actions">
          <button
            className="header__menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            className="header__action header__action--profile"
            id="header-user-btn"
            onClick={handleChangePopup}
          >
            <img
              id="profile-icon"
              className="header__action-icon"
              src={user?.avatar}
              alt="Profile"
            />
            <span className="header__action-text">Perfil</span>
          </button>
        </div>
      </div>
      <div
        className={`header__mobile-menu ${
          isMenuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
        <nav className="header__mobile-nav">
          <NavLink
            to="/dashboard"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/collection"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Coleção
          </NavLink>

          <NavLink
            to="/analysis"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Análise
          </NavLink>

          <NavLink
            to="/recommendation"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Recomendações
          </NavLink>

          <NavLink
            to="/categories"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Categorias
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
