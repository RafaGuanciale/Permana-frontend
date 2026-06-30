import React from "react";
// import { useToast } from "../_kit/contexts/ToastContext";

const { useState } = React;

export function DeleteAccount({ onDeleted }) {
//   const { logoutToast } = useToast();
  const [password, setPassword] = useState("");
  const [confirming, setConfirming] = useState(false);

  const handleDelete = () => {
    setConfirming(false);
    const toast = logoutToast({
      message: "Excluindo sua conta",
      sub: "Removendo a sua coleção e os seus dados.",
    });
    setTimeout(() => {
      toast.done("Sua conta foi excluída.");
      onDeleted && onDeleted();
    }, 1500);
  };

  return (
    <div className="delete-account">
      <p className="delete-account__eyebrow">Conta</p>
      <h2 className="delete-account__title">Excluir conta</h2>
      <p className="delete-account__sub">
        Esta ação é permanente. A sua coleção não pode ser recuperada depois.
      </p>

      <div className="delete-account__warning">
        <p className="delete-account__warning-title">
          O que você perde para sempre
        </p>
        <ul className="delete-account__losses">
          <li className="delete-account__loss">
            Toda a sua coleção e o histórico de fragrâncias
          </li>
          <li className="delete-account__loss">
            A sua identidade olfativa e os diagnósticos
          </li>
          <li className="delete-account__loss">
            Recomendações, listas de desejo e categorias
          </li>
        </ul>
      </div>

      <label className="delete-account__field">
        <span className="delete-account__label">
          Digite sua senha para confirmar
        </span>
        <input
          className="delete-account__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha atual"
        />
      </label>

      <div className="delete-account__actions">
        <button
          type="button"
          className="delete-account__submit"
          onClick={() => password && setConfirming(true)}
          disabled={!password}
        >
          Excluir minha conta
        </button>
      </div>
{/* 
      {confirming && (
        <ConfirmDialog
          tone="danger"
          eyebrow="Sem volta"
          title="Excluir a sua conta?"
          message="A sua coleção e a sua identidade olfativa serão apagadas para sempre. Não dá para desfazer."
          confirmLabel="Excluir tudo"
          cancelLabel="Manter conta"
          onConfirm={handleDelete}
          onCancel={() => setConfirming(false)}
        />
      )} */}
    </div>
  );
}
