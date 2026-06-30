import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

export function Logout() {
  const { handleClosePopup } = useContext(PopupContext);
  const { logout } = useContext(AuthContext);
  const { updateUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    updateUser(null);
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
          <h2 className="Logout__title">Sair da sua conta?</h2>
          <p className="Logout__message">
            Sua coleção fica guardada. <br />
            Você pode voltar quando quiser.
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
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
