import devAvatar from "../../images/Developper/avatar.jpg";
import settingsBtn from "../../images/icons/settings.png";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function ProfilePopup() {
  const { activePopup } = useContext(PopupContext);
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);
  const { logout } = useContext(AuthContext);
  const { updateUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmation = confirm("Tem certeza que deseja sair?");
    if (!confirmation) {
      return;
    }
    logout();
    updateUser(null);
    handleClosePopup();
    navigate("/");
  };

  if (!user) return null;
  return (
    <>
      <div className="profile__info">
        <button
          aria-label="Fechar pop-up"
          className="popup__close"
          type="button"
          onClick={handleClosePopup}
        ></button>
        <img className="profile__avatar" src={user.avatar} alt="avatar" />
        <h1 className="profile__name">{user.name}</h1>
        <p className="profile__email">{user.email}</p>
        <div className="profile__buttons">
          <button
            className="profile__btn profile__btn--edit"
            id="profile-edit-btn"
            onClick={() => handleOpenPopup("edit")}
          >
            Edit
          </button>
          <button
            className="profile__btn profile__settings"
            id="profile-edit-settings-btn"
          >
            Settings <img className="profile__icon" src={settingsBtn} />
          </button>
          <button
            className="profile__btn profile__btn--leave"
            id="profile-edit-leave-btn"
            onClick={handleLogout}
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePopup;
