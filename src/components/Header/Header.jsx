import loginIcon from "../../images/icons/circle-user-champagne.png";
import profileIcon from "../../images/Developper/avatar.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Popup from "../Popups/Popup";
import LoginPopup from "../Popups/LoginPopup";
import ProfilePopup from "../Popups/ProfilePopup";
import { PopupContext } from "../../contexts/PopupContext";

function Header() {
  const { isLogged } = useContext(AuthContext);
  const { activePopup, handleOpenPopup, handleClosePopup } =
    useContext(PopupContext);

  const handleChangePopup = () => {
    handleOpenPopup(isLogged ? "profile" : "login");
  };

  return (
    <header className="header" id="header">
      <div className="header__container">
        <h2 className="header__title">Aromatik</h2>
        <div className="header__navigation">
          {isLogged ? (
            <nav className="header__nav" id="header__nav-user">
              <NavLink to="/dashboard" className="header__nav-link">
                Dashboard
              </NavLink>
              <NavLink to="/collection" className="header__nav-link">
                Coleção
              </NavLink>
              <NavLink to="/analyse" className="header__nav-link">
                Análise
              </NavLink>
              <NavLink to="/collection" className="header__nav-link">
                Recomendações
              </NavLink>
              <NavLink to="/categories" className="header__nav-link">
                Categorias
              </NavLink>
              <NavLink to="/blog" className="header__nav-link">
                Blog
              </NavLink>
            </nav>
          ) : (
            <nav className="header__nav" id="header__nav-landing">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
              <a href="#about-aromatik" className="header__nav-link">
                Produto
              </a>
              <a href="#author" className="header__nav-link">
                Desenvolvedor
              </a>
            </nav>
          )}
        </div>
        <div className="header__actions">
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
      {activePopup && (
        <Popup
          popupClass={
            activePopup === "login" ? "popup__login" : "popup__profile"
          }
        >
          {activePopup === "login" ? <LoginPopup /> : <ProfilePopup />}
        </Popup>
      )}
    </header>
  );
}

export default Header;
