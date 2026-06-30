import React, { useState } from "react";

const LOSSES = [
  "Toda a sua coleção e o histórico de fragrâncias",
  "A sua identidade olfativa e os diagnósticos",
  "Recomendações, listas de desejo e categorias",
];

function DeleteAccount({ onDeleted }) {
  const [password, setPassword] = useState("");
  const [confirming, setConfirming] = useState(false);

  const armed = password.length > 0;

  const handleConfirm = () => {
    setConfirming(false);
    setPassword("");
    onDeleted?.();
  };

  return (
    <div className="deleteAccount">
      <div className="deleteAccount__head">
        <p className="deleteAccount__eyebrow">Conta</p>
        <h2 className="deleteAccount__title">Excluir conta</h2>
        <p className="deleteAccount__subtitle">
          Esta ação é permanente. A sua coleção não pode ser recuperada depois.
        </p>
      </div>

      <div className="deleteAccount__warning">
        <p className="deleteAccount__warning-title">O que você perde para sempre</p>
        <ul className="deleteAccount__list">
          {LOSSES.map((item) => (
            <li key={item} className="deleteAccount__item">
              <span aria-hidden="true" className="deleteAccount__dash">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="deleteAccount__field">
        <label htmlFor="delete-password" className="deleteAccount__label">
          Digite sua senha para confirmar
        </label>
        <input
          id="delete-password"
          className="deleteAccount__input"
          type="password"
          placeholder="Sua senha atual"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="deleteAccount__actions">
        <button
          type="button"
          className={`deleteAccount__delete${armed ? " deleteAccount__delete--armed" : ""}`}
          disabled={!armed}
          onClick={() => setConfirming(true)}
        >
          Excluir minha conta
        </button>
      </div>

      {confirming && (
        <div className="deleteAccount__overlay" onClick={() => setConfirming(false)}>
          <div
            className="deleteAccount__dialog"
            role="alertdialog"
            aria-modal="true"
            aria-label="Excluir a sua conta?"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="deleteAccount__dialog-eyebrow">Sem volta</p>
            <h3 className="deleteAccount__dialog-title">Excluir a sua conta?</h3>
            <p className="deleteAccount__dialog-message">
              A sua coleção e a sua identidade olfativa serão apagadas para sempre.
              Não dá para desfazer.
            </p>
            <div className="deleteAccount__dialog-actions">
              <button
                type="button"
                className="deleteAccount__cancel"
                onClick={() => setConfirming(false)}
              >
                Manter conta
              </button>
              <button
                type="button"
                className="deleteAccount__confirm"
                onClick={handleConfirm}
              >
                Excluir tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;
