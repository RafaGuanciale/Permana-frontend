import { Link } from "react-router-dom";

function DashboardIdentity() {
  return (
    <div className="dashIdentity__content">
      <div className="dashIdentity__header">
        <p className="dashIdentity__header__section-name">
          Identidade Olfativa
        </p>
        <p className="dashIdentity__header__profile">
          Perfil amadeirado aromático
        </p>
        <p className="dashIdentity__header__info">desbalanceada</p>
      </div>
      <div className="dashIdentity__container">
        <div className="dashIdentity__balance__bars">
          <div className="dashIdentity__bar-denses">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Amadeirado</p>
              <p className="dashIdentity__bar__percent-label">85%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__denses-percent"></div>
            </div>
          </div>
          <div className="dashIdentity__bar-aromatic">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Aromático</p>
              <p className="dashIdentity__bar__percent-label">72%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__aromatic-percent"></div>
            </div>
          </div>
          <div className="dashIdentity__bar-fresh">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Frescas</p>
              <p className="dashIdentity__bar__percent-label">61%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__fresh-percent"></div>
            </div>
          </div>
          <div className="dashIdentity__bar-aquatic">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Aquático</p>
              <p className="dashIdentity__bar__percent-label">28%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__aquatic-percent"></div>
            </div>
          </div>
          <div className="dashIdentity__bar-citric">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Cítrico</p>
              <p className="dashIdentity__bar__percent-label">22%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__citric-percent"></div>
            </div>
          </div>
          <div className="dashIdentity__bar-oriental">
            <div className="dashIdentity__bar__text">
              <p className="dashIdentity__bar__title">Oriental</p>
              <p className="dashIdentity__bar__percent-label">47%</p>
            </div>
            <div className="dashIdentity__bar-bars">
              <div className="dashIdentity__bar"></div>
              <div className="dashIdentity__bar__oriental-percent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashIdentity__footer">
        <Link className="dashIdentity__footer__view" to="/analysis">
          Ver análise completa →
        </Link>
      </div>
    </div>
  );
}

export default DashboardIdentity;
