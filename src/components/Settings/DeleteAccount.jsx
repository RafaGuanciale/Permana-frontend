import { useState } from "react";
import DeleteAccountPopup from "../Popups/DeleteAccountPopup";

function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [activePopup, setActivePopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeleteError("");
    if (!password) {
      setDeleteError("Por favor, digite sua senha para confirmar.");
      return;
    }
    setActivePopup(true);
  };

  return (
    <>
      <div className="deleteAccount">
        <div className="deleteAccount__head">
          <p className="deleteAccount__eyebrow">Conta</p>
          <h2 className="deleteAccount__title">Excluir conta</h2>
          <p className="deleteAccount__subtitle">
            Esta ação é permanente. A sua coleção não pode ser recuperada
            depois.
          </p>
        </div>

        <div className="deleteAccount__warning">
          <p className="deleteAccount__warning-title">
            O que você perde para sempre
          </p>
          <ul className="deleteAccount__losses">
            <li className="deleteAccount__loss">
              Toda a sua coleção e o histórico de fragrâncias
            </li>
            <li className="deleteAccount__loss">
              A sua identidade olfativa e os diagnósticos
            </li>
            <li className="deleteAccount__loss">
              Recomendações, listas de desejo e categorias
            </li>
          </ul>
        </div>

        <form className="deleteAccount__form" onSubmit={handleSubmit}>
          <div className="deleteAccount__field">
            <label htmlFor="deletePassword" className="deleteAccount__label">
              Digite sua senha para confirmar
            </label>
            <input
              id="deletePassword"
              className="deleteAccount__input"
              type="password"
              name="password"
              placeholder="Sua senha atual"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {deleteError && (
            <span className="registerPage__input__error" role="alert">
              {deleteError}
            </span>
          )}
          <div className="deleteAccount__actions">
            <button
              type="submit"
              className="deleteAccount__submit"
              disabled={!password}
            >
              Excluir minha conta
            </button>
          </div>
        </form>
      </div>
      {activePopup && (
        <DeleteAccountPopup
          onClose={() => setActivePopup(false)}
          password={password}
          setDeleteError={setDeleteError}
        />
      )}
    </>
  );
}

export default DeleteAccount;
