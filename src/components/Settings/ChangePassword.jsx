import React, { useState } from "react";

const STRENGTH_LABELS = ["", "Fraca", "Razoável", "Boa", "Forte"];

function getStrength(pw) {
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score += 1;
  if (/\d/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw)) score += 1;
  return Math.min(score, 4);
}

/**
 * ChangePassword — painel "Alterar senha" do SettingsPage.
 * Senha atual + nova (com medidor de força) + confirmação.
 * @param onSubmit  recebe { current, next } ao salvar com sucesso.
 */
function ChangePassword({ onSubmit }) {
  const [data, setData] = useState({ current: "", next: "", confirm: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const strength = getStrength(data.next);
  const tooShort = data.next.length > 0 && data.next.length < 8;
  const mismatch = data.confirm.length > 0 && data.confirm !== data.next;
  const isValid = data.current && data.next.length >= 8 && data.confirm === data.next;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit?.({ current: data.current, next: data.next });
    setData({ current: "", next: "", confirm: "" });
  };

  return (
    <div className="changePassword">
      <div className="changePassword__head">
        <p className="changePassword__eyebrow">Segurança</p>
        <h2 className="changePassword__title">Alterar senha</h2>
        <p className="changePassword__subtitle">
          Escolha uma senha que só você guarda. Mínimo de 8 caracteres.
        </p>
      </div>

      <form className="changePassword__form" onSubmit={handleSubmit}>
        <div className="changePassword__field">
          <label htmlFor="current" className="changePassword__label">Senha atual</label>
          <input
            id="current"
            className="changePassword__input"
            type="password"
            name="current"
            placeholder="Sua senha de hoje"
            value={data.current}
            onChange={handleChange}
          />
        </div>

        <div className="changePassword__field">
          <label htmlFor="next" className="changePassword__label">Nova senha</label>
          <input
            id="next"
            className="changePassword__input"
            type="password"
            name="next"
            placeholder="No mínimo 8 caracteres"
            value={data.next}
            onChange={handleChange}
          />
          {data.next && (
            <div className="changePassword__strength">
              <div className="changePassword__bars">
                {[1, 2, 3, 4].map((i) => {
                  let cls = "changePassword__bar";
                  if (i <= strength) cls += strength <= 1 ? " changePassword__bar--weak" : " changePassword__bar--on";
                  return <span key={i} className={cls} />;
                })}
              </div>
              <span className={`changePassword__strength-label${strength <= 1 ? " changePassword__strength-label--weak" : ""}`}>
                {tooShort ? "Curta demais — pelo menos 8 caracteres." : `Força: ${STRENGTH_LABELS[strength]}`}
              </span>
            </div>
          )}
          {!data.next && (
            <span className="changePassword__hint">
              Combine maiúsculas, números e um símbolo para mais força.
            </span>
          )}
        </div>

        <div className="changePassword__field">
          <label htmlFor="confirm" className="changePassword__label">Confirmar nova senha</label>
          <input
            id="confirm"
            className="changePassword__input"
            type="password"
            name="confirm"
            placeholder="Repita a nova senha"
            value={data.confirm}
            onChange={handleChange}
          />
          {mismatch
            ? <span className="changePassword__error">As senhas não coincidem.</span>
            : <span className="changePassword__hint">Para evitar enganos.</span>}
        </div>

        <div className="changePassword__actions">
          <button
            type="submit"
            className="changePassword__submit"
            disabled={!isValid}
          >
            Alterar senha
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
