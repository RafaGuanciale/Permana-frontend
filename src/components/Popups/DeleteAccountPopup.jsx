import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

export function DeleteAccountPopup() {
  const { handleClosePopup } = useContext(PopupContext);
  const { deleteAcc } = useContext(AuthContext);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAcc();
    handleClosePopup();
    navigate("/");
  };

  return (
    <div className="Logout__overlay">
      <div
        className="Logout"
        role="alertdialog"
        aria-modal="true"
        aria-label="Sair da sua conta?"
      >
        <div className="Logout__panel">
          <p className="Logout__eyebrow">Sua sessão</p>{" "}
          <h2 className="Logout__title">Excluir a sua conta?</h2>
          <p className="Logout__message">
            A sua coleção e a sua identidade olfativa serão apagadas para
            sempre.
          </p>
          <div className="Logout__actions">
            <button
              type="button"
              className="Logout__btn Logout__btn--stay"
              onClick={handleClosePopup}
            >
              Ficar
            </button>
            <button
              type="button"
              className="Logout__btn Logout__btn--leave"
              onClick={handleDelete}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountPopup;
