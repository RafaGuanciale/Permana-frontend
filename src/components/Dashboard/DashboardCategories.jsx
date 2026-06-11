import { Link } from "react-router-dom";
import work from "../../images/categorias//dashCategories/dashCategories__work.jpg";
import date from "../../images/categorias/dashCategories/dashCategories__date.jpg";
import casual from "../../images/categorias/dashCategories/dashCategories__casual.jpg";
import party from "../../images/categorias/dashCategories/dashCategories__party.jpg";

function DashboardCategories() {
  return (
    <div className="dashCategories__content">
      <div className="dashCategories__header">
        <p className="dashCategories__header__section-name">
          Categorias & Ocasiões
        </p>
        <p className="dashCategories__header__title">Explore por ocasião</p>
      </div>
      <div className="dashCategories__container">
        <div className="dashCategories__categories__box">
          <p className="dashCategories__categories__label">trabalho</p>
          <img
            className="dashCategories__categories__image"
            src={work}
            alt="categoria trabalho"
          />
          <div className="dashCategories__categories__image-overlay"></div>
        </div>
        <div className="dashCategories__categories__box">
          <p className="dashCategories__categories__label">Encontros</p>
          <img
            className="dashCategories__categories__image"
            src={date}
            alt="categoria trabalho"
          />
          <div className="dashCategories__categories__image-overlay"></div>
        </div>
        <div className="dashCategories__categories__box">
          <p className="dashCategories__categories__label">Casual</p>
          <img
            className="dashCategories__categories__image"
            src={casual}
            alt="categoria trabalho"
          />
          <div className="dashCategories__categories__image-overlay"></div>
        </div>
        <div className="dashCategories__categories__box">
          <p className="dashCategories__categories__label">Festas</p>
          <img
            className="dashCategories__categories__image"
            src={party}
            alt="categoria trabalho"
          />
          <div className="dashCategories__categories__image-overlay"></div>
        </div>
      </div>
      <div className="dashCategories__footer">
        <Link className="dashCategories__footer__view" to="/categories">
          Ver todas as categorias →
        </Link>
      </div>
    </div>
  );
}

export default DashboardCategories;
