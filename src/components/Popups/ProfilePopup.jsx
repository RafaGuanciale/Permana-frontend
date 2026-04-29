import devAvatar from "../../images/Developper/avatar.jpg";
import settingsBtn from "../../images/icons/settings.png";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePopup() {
  const { handleClosePopup } = useContext(PopupContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmation = confirm("Tem certeza que deseja sair?");
    if (!confirmation) {
      return;
    }
    logout();
    handleClosePopup();
    navigate("/");
  };
  return (
    <>
      <div className="profile__info">
        <button
          aria-label="Fechar pop-up"
          className="popup__close"
          type="button"
          onClick={handleClosePopup}
        ></button>
        <img className="profile__avatar" src={devAvatar} alt="avatar" />
        <h1 className="profile__name">Rafael Guanciale</h1>
        <p className="profile__description">Front-end developer in training</p>
        <div className="profile__buttons">
          <button
            className="profile__btn profile__btn--edit"
            id="profile-edit-btn"
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
