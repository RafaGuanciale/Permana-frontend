import { useState } from "react";
import ChangePassword from "../components/Settings/ChangePassword";
import DeleteAccount from "../components/Settings/DeleteAccount"

function SettingsPage({ onDelete, errorMessage }) {
  const [sectionActive, setSectionActive] = useState("senha");

  return (
    <section className="settings" id="settingsPage">
      <div className="settings__header">
                <div className="categoriesPage__header__circle-1"></div>
        <div className="categoriesPage__header__circle-2"></div>

        <p className="settings__eyebrow">Sua conta</p>
        <h1 className="section__tittle settings__title">Configurações</h1>
        <p className="section__subtittle settings__intro">
          Ajuste como o Permana cuida da sua jornada.
        </p>
      </div>

      <div className="settings__panel">
        <aside className="settings__sidebar">
          <p className="settings__sidebar-label">Seções</p>
          <nav className="settings__nav">
            <button
              type="button"
              className={`settings__nav-item${sectionActive === "senha" ? " settings__nav-item--active" : ""}`}
              onClick={() => setSectionActive("senha")}
            >
              <span className="settings__nav-label">Alterar senha</span>
              <span className="settings__nav-desc">Segurança da conta</span>
            </button>
            <button
              type="button"
              className={`settings__nav-item settings__nav-item--danger${sectionActive === "conta" ? " settings__nav-item--active" : ""}`}
              onClick={() => setSectionActive("conta")}
            >
              <span className="settings__nav-label">Excluir conta</span>
              <span className="settings__nav-desc">Encerrar de vez</span>
            </button>
          </nav>
        </aside>

        <div className="settings__divider" />

        <div className="settings__content">
              {sectionActive === "senha"
                ? <ChangePassword />
                : <DeleteAccount onDelete={onDelete} errorMessage={errorMessage} />}
        </div>
      </div>
    </section>
  );
}

export default SettingsPage;
