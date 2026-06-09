import { useContext, useRef, useState } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import { updateUserInfo } from "../../utils/api";
import { getToken } from "../../utils/token";
import closeIcon from "../../images/icons/close__icon.svg";

function EditProfilePopup() {
  const { handleClosePopup } = useContext(PopupContext);
  const { user, updateUser } = useContext(UserContext);

  const [avatar, setAvatar] = useState(user?.avatar ?? null);
  const fileRef = useRef(null);

  const handlePickFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setAvatar(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = getToken();
    if (!jwt) return;

    const name = e.target.profileName.value.trim();

    try {
      const updatedUser = await updateUserInfo(jwt, name);
      updateUser({ ...updatedUser, avatar });
      handleClosePopup();
    } catch (err) {
      console.error("Erro ao salvar perfil:", err);
    }
  };

  return (
    <div className="profile-edit__content">
      <button
        aria-label="Fechar pop-up"
        className="popup__close"
        type="button"
        onClick={handleClosePopup}
      >
        <img src={closeIcon} alt="" />
      </button>

      <div className="edit__text">
        <h3 className="edit__message">Editar Perfil</h3>
      </div>

      <form
        className="profile-edit__form form"
        id="profile-edit-form"
        onSubmit={handleSubmit}
      >
        <div className="profile-edit__avatar-row">
          <button
            type="button"
            className="profile-edit__avatar"
            onClick={() => fileRef.current.click()}
            aria-label="Trocar foto de perfil"
          >
            <img
              className="profile-menu__avatar"
              src={avatar}
              alt={`Foto de ${user.name}`}
            />
          </button>

          <div className="profile-edit__avatar-info">
            <span className="profile-edit__avatar-label">Foto de perfil</span>
            <p className="profile-edit__avatar-hint">PNG ou JPG · até 5 MB</p>
            <div className="profile-edit__avatar-actions">
              <button
                type="button"
                className="profile-edit__photo-btn"
                onClick={() => fileRef.current.click()}
              >
                Trocar
              </button>
              <button
                type="button"
                className="profile-edit__photo-btn profile-edit__photo-btn--remove"
                onClick={handleRemove}
                disabled={!avatar}
              >
                Remover
              </button>
            </div>
          </div>

          <input
            ref={fileRef}
            className="profile-edit__file"
            type="file"
            accept="image/*"
            hidden
            onChange={handlePickFile}
          />
        </div>

        <label className="edit__form-label" htmlFor="edit-name">
          Nome
        </label>
        <input
          id="edit-name"
          className="form__input form__profile-edit-name"
          name="profileName"
          type="text"
          defaultValue={user?.name ?? ""}
          required
          minLength="4"
          maxLength="30"
        />

        <div className="profile-edit__actions">
          <button
            type="button"
            className="form__button edit__form-button edit__form-button--ghost"
            onClick={handleClosePopup}
          >
            Cancelar
          </button>
          <button
            className="form__button edit__form-button"
            type="submit"
            id="edit-profile_submit-btn"
          >
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfilePopup;
