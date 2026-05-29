import { useContext, useState } from "react";
import { PopupContext } from "../../contexts/PopupContext";

function EditProfilePopup() {
  const { handleClosePopup } = useContext(PopupContext);

  return (
    <div className="profile-edit__content">
      <button
        aria-label="Fechar pop-up"
        className="popup__close"
        id="profile-edit-close-btn"
        type="button"
        onClick={handleClosePopup}
      ></button>
      <div className="edit__text">
        <h3 className="edit__message">Editar Perfil</h3>
      </div>
      <form
        className="profile-edit__form form"
        id="profile-edit-form"
        action=""
      >
        <label className="edit__form-label" htmlFor="edit-name">
          Nome
        </label>
        <input
          className="form__input form__profile-edit-name"
          name="profileName"
          type="text"
          required
          minLength="4"
          maxLength="30"
        />
        <label className="edit__form-label" htmFor="edit-description">
          Descrição
        </label>
        <input
          className="form__input form__profile-edit-description"
          name="profileDescription"
          type="text"
          required
          minLength="2"
          maxLength="40"
        />
        <button
          className="form__button edit__form-button"
          type="submit"
          id="edit-profile_submit-btn"
          //   disabled
        >
          Editar
        </button>
      </form>
    </div>
  );
}

export default EditProfilePopup;
