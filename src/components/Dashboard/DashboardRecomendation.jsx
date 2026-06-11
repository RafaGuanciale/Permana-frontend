import { Link } from "react-router-dom";
import fresh from "../../images/icons/fresh.png";
import aquatic from "../../images/icons/aquatic.png";
import floral from "../../images/icons/floral.png";

function DashboardRecomendation() {
  return (
    <div className="dashRecomendation__content">
      <div className="dashRecomendation__header">
        <p className="dashRecomendation__header__section-name">
          Recomendações para você
        </p>
        <p className="dashRecomendation__header__gaps">
          3 Lacunas identificadas
        </p>
        <p className="dashRecomendation__header__label">
          Perfis que vão equilibrar e evoluir sua coleção
        </p>
      </div>
      <div className="dashRecomendation__container">
        <div className="dashRecomendation__box">
          <div className="dashRecomendation__category">
            <img
              className="dashRecomendation__category__image"
              src={fresh}
              alt="icone fresco"
            />
            <div className="dashRecomendation__category__texts">
              <h3 className="dashRecomendation__title">Frescos</h3>
              <p className="dashRecomendation__description">
                Notas cítricas e leves para trazer brilho e frescor ao seu
                perfil.
              </p>
            </div>
            <Link className="dashRecomendation__category__cta" to="#">
              Ver sugestões →
            </Link>
          </div>
          <div className="dashRecomendation__category">
            <img
              className="dashRecomendation__category__image"
              src={aquatic}
              alt="icone fresco"
            />
            <div className="dashRecomendation__category__texts">
              <h3 className="dashRecomendation__title">Aquáticos</h3>
              <p className="dashRecomendation__description">
                Acordes limpos e fluidos para um perfil mais fresco e arejado.
              </p>
            </div>
            <Link className="dashRecomendation__category__cta" to="#">
              Ver sugestões →
            </Link>
          </div>
          <div className="dashRecomendation__category">
            <img
              className="dashRecomendation__category__image"
              src={floral}
              alt="icone fresco"
            />
            <div className="dashRecomendation__category__texts">
              <h3 className="dashRecomendation__title">Florais</h3>
              <p className="dashRecomendation__description">
                Facetas florais sutis para mais elegância e suavidade.
              </p>
            </div>
            <Link className="dashRecomendation__category__cta" to="#">
              Ver sugestões →
            </Link>
          </div>
        </div>
      </div>
      <div className="dashRecomendation__footer">
        <Link className="dashRecomendation__footer__view" to="/recommendation">
          Ver todas as recomendações →
        </Link>
      </div>
    </div>
  );
}

export default DashboardRecomendation;
