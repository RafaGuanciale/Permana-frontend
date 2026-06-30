import React from "react";
// import { Button } from "../Button/Button";
// import { useToast } from "../_kit/contexts/ToastContext";

const { useState } = React;

function getStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 4);
}

const STRENGTH_LABEL = ["", "Fraca", "Razoável", "Boa", "Forte"];

export function ChangePassword() {
//   const { showToast } = useToast();

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const strength = getStrength(next);
  const tooShort = next.length > 0 && next.length < 8;
  const mismatch = confirm.length > 0 && confirm !== next;
  const isValid = current && next.length >= 8 && confirm === next;

  const barClass = (index) =>
    `change-password__bar${strength >= index ? " change-password__bar--on" : ""}${
      strength >= index && strength <= 1 ? " change-password__bar--weak" : ""
    }`;

  const handleSubmit = () => {
    if (!isValid) return;
    showToast("Senha alterada", {
      sub: "Sua conta está protegida com a nova senha.",
    });
    setCurrent("");
    setNext("");
    setConfirm("");
  };

  return (
    <div className="change-password">
      <p className="change-password__eyebrow">Segurança</p>
      <h2 className="change-password__title">Alterar senha</h2>
      <p className="change-password__sub">
        Escolha uma senha que só você guarda. Mínimo de 8 caracteres.
      </p>

      <label className="change-password__field">
        <span className="change-password__label">Senha atual</span>
        <span className="change-password__control">
          <input
            className="change-password__input"
            type={showCurrent ? "text" : "password"}
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            placeholder="Sua senha de hoje"
          />
          <button
            type="button"
            className="change-password__reveal"
            onClick={() => setShowCurrent((v) => !v)}
          >
            {showCurrent ? "Ocultar" : "Mostrar"}
          </button>
        </span>
      </label>

      <label className="change-password__field">
        <span className="change-password__label">Nova senha</span>
        <span className="change-password__control">
          <input
            className="change-password__input"
            type={showNext ? "text" : "password"}
            value={next}
            onChange={(e) => setNext(e.target.value)}
            placeholder="No mínimo 8 caracteres"
          />
          <button
            type="button"
            className="change-password__reveal"
            onClick={() => setShowNext((v) => !v)}
          >
            {showNext ? "Ocultar" : "Mostrar"}
          </button>
        </span>

        {!tooShort && (
          <p className="change-password__hint">
            Combine maiúsculas, números e um símbolo para mais força.
          </p>
        )}

        {next && (
          <div className="change-password__strength">
            <div className="change-password__bars">
              <span className={barClass(1)} />
              <span className={barClass(2)} />
              <span className={barClass(3)} />
              <span className={barClass(4)} />
            </div>
            <span
              className={`change-password__strength-label${
                strength <= 1 ? " change-password__strength-label--weak" : ""
              }`}
            >
              {tooShort
                ? "Curta demais. Use pelo menos 8 caracteres."
                : `Força: ${STRENGTH_LABEL[strength]}`}
            </span>
          </div>
        )}
      </label>

      <label className="change-password__field">
        <span className="change-password__label">Confirmar nova senha</span>
        <span className="change-password__control">
          <input
            className="change-password__input"
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repita a nova senha"
          />
          <button
            type="button"
            className="change-password__reveal"
            onClick={() => setShowConfirm((v) => !v)}
          >
            {showConfirm ? "Ocultar" : "Mostrar"}
          </button>
        </span>

        {mismatch ? (
          <p className="change-password__error">As senhas não coincidem.</p>
        ) : (
          <p className="change-password__hint">Para evitar enganos.</p>
        )}
      </label>

      <div className="change-password__actions">
        {/* <Button variant="primary" onClick={handleSubmit} disabled={!isValid}>
          Alterar senha
        </Button> */}
      </div>
    </div>
  );
}
