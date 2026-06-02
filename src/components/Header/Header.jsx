import loginIcon from "../../images/icons/circle-user-champagne.png";
import profileIcon from "../../images/Developper/avatar.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { PopupContext } from "../../contexts/PopupContext";

function Header() {
  const { isLogged } = useContext(AuthContext);
  const { activePopup, handleOpenPopup, handleClosePopup } =
    useContext(PopupContext);

  const handleChangePopup = () => {
    handleOpenPopup(isLogged ? "profile" : "login");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="header__container">
        <h2 className="header__title">Aromatik</h2>
        <div className="header__navigation">
          {isLogged && (
            <nav className="header__nav" id="header__nav-user">
              <NavLink to="/dashboard" className="header__nav-link">
                Dashboard
              </NavLink>
              <NavLink to="/collection" className="header__nav-link">
                Coleção
              </NavLink>
              <NavLink to="/analysis" className="header__nav-link">
                Análise
              </NavLink>
              <NavLink to="/recommendation" className="header__nav-link">
                Recomendações
              </NavLink>
              <NavLink to="/categories" className="header__nav-link">
                Categorias
              </NavLink>
              {/* <NavLink to="/blog" className="header__nav-link">
                Blog
              </NavLink> */}
            </nav>
          )}
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
            {isLogged ? (
              <img
                id="profile-icon"
                className="header__action-icon"
                src={profileIcon}
                alt="Profile"
              />
            ) : (
              <img
                id="profile-icon"
                className="header__action-icon"
                src={loginIcon}
                alt="Profile"
              />
            )}
            {isLogged ? (
              <span className="header__action-text">Perfil</span>
            ) : (
              <span className="header__action-text">Entrar</span>
            )}
          </button>
        </div>
      </div>
      <div
        className={`header__mobile-menu ${
          isMenuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
        {isLogged ? (
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
        ) : (
          <nav className="header__mobile-nav">
            <Link
              to="/"
              className="header__mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <a
              href="#about-aromatik"
              className="header__mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Produto
            </a>

            <a
              href="#author"
              className="header__mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Desenvolvedor
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
