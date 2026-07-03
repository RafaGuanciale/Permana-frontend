import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as api from "../../utils/api";
import { getToken } from "../../utils/token";

export function DeleteAccountPopup({ onClose, password, setDeleteError }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    setDeleteError("");
    setIsDeleting(true);
    api
      .deleteAccount(getToken(), password)
      .then(() => {
        logout();
        navigate("/");
      })
      .catch(() => {
        setDeleteError(
          "Não foi possível excluir a conta. Verifique sua senha e tente novamente.",
        );
        setIsDeleting(false);
        onClose();
      });
  };

  return (
    <div className="Logout__overlay">
      <div
        className="Logout"
        role="alertdialog"
        aria-modal="true"
        aria-label="Excluir a sua conta?"
      >
        <div className="Logout__panel">
          <p className="Logout__eyebrow">Sua conta</p>{" "}
          <h2 className="Logout__title">Excluir a sua conta?</h2>
          <p className="Logout__message">
            A sua coleção e a sua identidade olfativa serão apagadas para
            sempre.
          </p>
          <div className="Logout__actions">
            <button
              type="button"
              className="Logout__btn Logout__btn--stay"
              onClick={onClose}
            >
              Ficar
            </button>
            <button
              type="button"
              className="Logout__btn Logout__btn--leave"
              onClick={handleDeleteAccount}
              disabled={isDeleting}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountPopup;
