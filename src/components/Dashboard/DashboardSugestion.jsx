import { Link } from "react-router-dom";
import cloud from "../../images/icons/cloud_brown.png";
import acquaDG from "../../images/perfumes/acqua_di_gio-sugestion3.png";

function DashboardSugestion() {
  return (
    <div className="dashSugestion__container">
      <div className="dashSugestion__text">
        <p className="dashSugestion__text__section-name">Perfume do dia</p>
        <p className="dashSugestion__text__title">Sugestão para hoje</p>
        <div className="dashSugestion__text__container">
          <p className="dashSugestion__text__name">Acqua Di Gio EDT</p>
          <div className="dashSugestion__text__tags">
            <p className="dashSugestion__text__tag">Fresco</p>
            <p className="dashSugestion__text__tag">· Aquático</p>
            <p className="dashSugestion__text__tag">· Versátil</p>
          </div>
          <div className="dashSugestion__weather">
            <img src={cloud} alt="icone núvem" />
            <p className="dashSugestion__weather__text">22°C • Nublado</p>
          </div>
        </div>
      </div>
      <div className="dashSugestion__content">
        <img
          className="dashSugestion__content__image"
          src={acquaDG}
          alt="perfume do dia"
        />
      </div>
      <div className="dashSugestion__footer">
        <Link className="dashSugestion__footer__view" to="">
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}

export default DashboardSugestion;
