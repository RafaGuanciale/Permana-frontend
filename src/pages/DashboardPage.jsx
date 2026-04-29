import heroImage from "../images/hero/patrick-mueller.jpg";
import bleuNoir from "../images/perfumes/narcisorodriguez_bleu_noir_parfum.jpg";
import arrowLeft from "../images/icons/arrow-left.PNG";
import arrowRight from "../images/icons/arrow-right.PNG";
import { Link } from "react-router-dom";
import { initialCards } from "../utils/consts";
import CollectionCard from "../components/Cards/CollectionCards";

function DashboardPage() {
  return (
    <div className="dashboard__content">
      <div className="hero__content">
        <img className="hero__background__image" src={heroImage} alt="" />
        <div className="hero__image__overlay"></div>
        <div className="hero__container">
          <div className="hero__text">
            <p className="hero__overline">Sua jornada olfativa</p>
            <h2 className="hero__title">Resumida para hoje.</h2>
            <p className="hero__subtitle">
              Acompanhe o que importa, descubra novos perfumes e evolua seu
              estilo.
            </p>
            <a href="#" className="hero__cta">
              Ver meu resumo →
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard__wrapper--top">
        <div className="collection__content">
          <div className="collection__header">
            <div className="collection__header__text">
              <p className="collection__header__section-name">Minha Coleção</p>
              <p className="collection__header__resume">
                5 fragrâncias na sua coleção
              </p>
            </div>
            <button className="collection__header__add">
              + Adicionar fragrância
            </button>
          </div>
          <div className="collection__carousel">
            <img
              src={arrowLeft}
              alt=""
              className="collection__carousel__arrow--left"
            />
            <div className="collection__grid">
              {initialCards.map((card) => (
                <CollectionCard
                  key={card.id}
                  name={card.name}
                  brand={card.brand}
                  image={card.link}
                />
              ))}
              <div className="collection__card__new">
                <div className="collection__new__info">
                  <p className="collection__new__icon">+</p>
                  <p className="collection__new__label">Adicionar</p>
                </div>
              </div>
            </div>
            <img
              src={arrowRight}
              alt=""
              className="collection__carousel__arrow--right"
            />
          </div>

          <div className="collection__footer">
            <Link className="collection__footer__view" to="#">
              Ver coleção completa →
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard__wrapper--middle">
        <div className="identity__content">
          <div className="identity__header">
            <p className="identity__header__section-name">
              Identidade Olfativa
            </p>
            <p className="identity__header__profile">
              Perfil amadeirado aromático
            </p>
          </div>
          <div className="identity__footer">
            <Link className="identity__footer__view" to="#">
              Ver análise completa →
            </Link>
          </div>
        </div>
        <div className="recomendation__content">
          <div className="recomendation__header">
            <p className="recomendation__header__section-name">
              Recomendações para você
            </p>
            <p className="recomendation__header__gaps">
              3 Lacunas identificadas
            </p>
            <p className="recomendation__header__label">
              Perfis que vão equilibrar e evoluir sua coleção
            </p>
          </div>
          <div className="recomendation__footer">
            <Link className="recomendation__footer__view" to="#">
              Ver todas as recomendações →
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard__wrapper--middle">
        <div className="sugestion__content"></div>
        <div className="categories__content"></div>
        <div className="wishlist__content"></div>
      </div>
    </div>
  );
}

export default DashboardPage;
