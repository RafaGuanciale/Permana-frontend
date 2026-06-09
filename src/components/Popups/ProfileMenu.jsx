import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import editIcon from "../../images/icons/edit-profile-green.png";
import settingsIcon from "../../images/icons/settings-green.png";
import exitIcon from "../../images/icons/exit.png";
import closeIcon from "../../images/icons/close__icon.svg";

function ProfileMenu() {
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);
  const { logout } = useContext(AuthContext);
  const { updateUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmation = confirm("Tem certeza que deseja sair?");
    if (!confirmation) return;
    logout();
    updateUser(null);
    handleClosePopup();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="profile-menu" role="menu" aria-label="Menu de perfil">
      <button
        aria-label="Fechar pop-up"
        className="popup__close"
        type="button"
        onClick={handleClosePopup}
      >
        <img src={closeIcon} alt="" />
      </button>

      <div className="profile-menu__photo">
        <img
          className="profile-menu__avatar"
          src={user.avatar}
          alt={`Foto de ${user.name}`}
        />
        <div className="profile-menu__scrim" />

        <span
          className={`profile-menu__plan profile-menu__plan--${user.plan ?? "free"}`}
        >
          {user.plan === "pro" ? "Pro" : "Free"}
        </span>

        <div className="profile-menu__identity">
          <h2 className="profile-menu__name">{user.name}</h2>
          <h3 className="profile-menu__username" >@{user.username}</h3>
        </div>
      </div>

      {user.email && <p className="profile-menu__email">{user.email}</p>}

      <nav className="profile-menu__list">
        <button
          type="button"
          className="profile-menu__btn"
          role="menuitem"
          onClick={() => {
            handleClosePopup();
            handleOpenPopup("edit");
          }}
        >
          <span className="profile-menu__btn-icon-wrap">
            <img className="profile-menu__btn-icon" src={editIcon} alt="" />
          </span>
          Editar perfil
        </button>

        <button
          type="button"
          className="profile-menu__btn"
          role="menuitem"
          onClick={() => {
            handleClosePopup();
            handleOpenPopup("settings");
          }}
        >
          <span className="profile-menu__btn-icon-wrap">
            <img className="profile-menu__btn-icon" src={settingsIcon} alt="" />
          </span>
          Configurações
        </button>

        <button
          type="button"
          className="profile-menu__btn profile-menu__btn--exit"
          role="menuitem"
          onClick={handleLogout}
        >
          <span className="profile-menu__btn-icon-wrap profile-menu__btn-icon-wrap--exit">
            <img className="profile-menu__btn-icon" src={exitIcon} alt="" />
          </span>
          Sair da conta
        </button>
      </nav>
    </div>
  );
}

export default ProfileMenu;
