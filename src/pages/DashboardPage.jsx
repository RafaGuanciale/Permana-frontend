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
        <div className="dashCollection__content">
          <div className="dashCollection__header">
            <div className="dashCollection__header__text">
              <p className="dashCollection__header__section-name">
                Minha Coleção
              </p>
              <p className="dashCollection__header__resume">
                5 fragrâncias na sua coleção
              </p>
            </div>
            <button className="dashCollection__header__add">
              + Adicionar fragrância
            </button>
          </div>
          <div className="dashCollection__carousel">
            <img
              src={arrowLeft}
              alt="arrow left"
              className="dashCollection__carousel__arrow--left"
            />
            <div className="dashCollection__grid">
              {initialCards.map((card) => (
                <CollectionCard
                  key={card.id}
                  name={card.name}
                  brand={card.brand}
                  image={card.link}
                />
              ))}
              <div className="dashCollection__card__new">
                <div className="dashCollection__new__info">
                  <p className="dashCollection__new__icon">+</p>
                  <p className="dashCollection__new__label">Adicionar</p>
                </div>
              </div>
            </div>
            <img
              src={arrowRight}
              alt="arrow right"
              className="dashCollection__carousel__arrow--right"
            />
          </div>

          <div className="dashCollection__footer">
            <Link className="dashCollection__footer__view" to="#">
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
      <div className="dashboard__wrapper--bottom">
        <div className="dashSugestion__content">
          <div className="dashSugestion__header">
            <p className="dashSugestion__header__section-name">
              Perfume do dia
            </p>
            <p className="dashSugestion__header__title">
              Sugestão para o seu dia
            </p>
          </div>
          <div className="dashSugestion__footer">
            <Link className="dashSugestion__footer__view" to="#">
              Ver detalhes →
            </Link>
          </div>
        </div>
        <div className="dashCategories__content">
          <div className="dashCategories__header">
            <p className="dashCategories__header__section-name">
              Categorias & Ocasiões
            </p>
            <p className="dashCategories__header__title">Explore por ocasião</p>
          </div>
          <div className="dashCategories__footer">
            <Link className="dashCategories__footer__view" to="#">
              Ver todas as categorias →
            </Link>
          </div>
        </div>
        <div className="dashWishlist__content">
          <div className="dashWishlist__header">
            <p className="dashWishlist__header__section-name">Wishlist</p>
            <p className="dashWishlist__header__title">
              3 fragrâncias na sua lista
            </p>
          </div>
          <div className="dashWishlist__footer">
            <Link className="dashWishlist__footer__view" to="#">
              Ver wishlist completa →
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard__wrapper--blog">
        <div className="dashBlog__content">
          <div className="dashBlog__header">
            <div className="dashBlog__header__text">
              <p className="dashBlog__header__section-name">
                Editorial Aromatik
              </p>
              <p className="dashBlog__header__title">
                Conteúdos selecionados para inspirar sua jornada
              </p>
            </div>
            <Link className="dashBlog__header__cta" to="#">
              Ver todos os artigos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
