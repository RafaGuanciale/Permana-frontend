import heroImage from "../images/hero/hero__bg-image7.png";
import acquaDG from "../images/perfumes/acqua_di_gio-sugestion3.png";
import theOne from "../images/perfumes/theOne.jpg";
import imagination from "../images/perfumes/imagination.jpeg";
import allureHome from "../images/perfumes/allure_homme_edition_blunch.jpg";
import arrowLeft from "../images/icons/arrow-left.PNG";
import arrowRight from "../images/icons/arrow-right.PNG";
import fresh from "../images/icons/fresh.png";
import aquatic from "../images/icons/aquatic.png";
import floral from "../images/icons/floral.png";
import work from "../images/categorias//dashCategories/dashCategories__work.jpg";
import date from "../images/categorias/dashCategories/dashCategories__date.jpg";
import casual from "../images/categorias/dashCategories/dashCategories__casual.jpg";
import party from "../images/categorias/dashCategories/dashCategories__party.jpg";
import cloud from "../images/icons/cloud_brown.png";
import { Link } from "react-router-dom";
import { CollectionContext } from "../contexts/CollectionContext";
import CollectionCard from "../components/Cards/CollectionCards";
import { PopupContext } from "../contexts/PopupContext";
import Popup from "../components/Popups/Popup";
import CardsPopup from "../components/Popups/CardsPopup";
import { useContext } from "react";

function DashboardPage() {
  const { activePopup } = useContext(PopupContext);
  const { cards } = useContext(CollectionContext);
  const isEmpty = cards.length === 0;

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
                {isEmpty
                  ? "Nenhuma fragrância ainda"
                  : `${cards.length} fragrâncias na sua coleção`}
              </p>
            </div>
          </div>

          {isEmpty ? (
            <div className="dashCollection__empty">
              <p className="dashCollection__empty__icon">✦</p>
              <p className="dashCollection__empty__title">
                Adicione sua primeira fragrância
              </p>
              <p className="dashCollection__empty__text">
                Com pelo menos 3 perfumes, o Aromatik consegue identificar sua
                identidade olfativa e gerar recomendações.
              </p>
              <button className="dashCollection__header__add dashCollection__empty__cta">
                + Adicionar fragrância
              </button>
            </div>
          ) : (
            <>
              <div className="dashCollection__carousel">
                <img
                  src={arrowLeft}
                  alt="arrow left"
                  className="dashCollection__carousel__arrow--left"
                />
                <div className="dashCollection__grid">
                  {cards.map((card) => (
                    <CollectionCard
                      key={card.id}
                      name={card.name}
                      brand={card.brand}
                      image={card.link}
                      card={card}
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
                <Link className="dashCollection__footer__view" to="/collection">
                  Ver coleção completa →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="dashboard__wrapper--middle">
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
            <div className="dashIdentity__chart">
              <svg
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="160"
                  y="20"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Amadeirado
                </text>
                <text
                  x="265"
                  y="75"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Aromático
                </text>
                <text
                  x="265"
                  y="245"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Fresco
                </text>
                <text
                  x="160"
                  y="300"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Aquático
                </text>
                <text
                  x="55"
                  y="245"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Cítrico
                </text>
                <text
                  x="55"
                  y="75"
                  textAnchor="middle"
                  fill="#D8C9B1"
                  fontSize="13"
                  fontFamily="Montserrat"
                >
                  Oriental
                </text>

                <polygon
                  points="160,50 245,95 245,225 160,270 75,225 75,95"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                  fill="none"
                />
                <polygon
                  points="160,72 223,106 223,214 160,248 97,214 97,106"
                  stroke="#D8C9B1"
                  strokeOpacity="0.14"
                  fill="none"
                />
                <polygon
                  points="160,94 201,117 201,203 160,226 119,203 119,117"
                  stroke="#D8C9B1"
                  strokeOpacity="0.12"
                  fill="none"
                />
                <polygon
                  points="160,116 179,128 179,192 160,204 141,192 141,128"
                  stroke="#D8C9B1"
                  strokeOpacity="0.10"
                  fill="none"
                />

                <line
                  x1="160"
                  y1="160"
                  x2="160"
                  y2="50"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="245"
                  y2="95"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="245"
                  y2="225"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="160"
                  y2="270"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="75"
                  y2="225"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="75"
                  y2="95"
                  stroke="#D8C9B1"
                  strokeOpacity="0.18"
                />

                <polygon
                  points="160,66 218,116 212,206 160,238 141,208 116,126"
                  fill="#A8B7A4"
                  fillOpacity="0.22"
                  stroke="#D8C9B1"
                  strokeWidth="2"
                />

                <circle cx="160" cy="66" r="4" fill="#DA667B" />
                <circle cx="218" cy="116" r="4" fill="#A8B7A4" />
                <circle cx="212" cy="206" r="4" fill="#D8C9B1" />
                <circle cx="160" cy="238" r="4" fill="#CDBB9D" />
                <circle cx="141" cy="208" r="4" fill="#CFAF6D" />
                <circle cx="116" cy="126" r="4" fill="#B59D87" />
              </svg>
            </div>
          </div>
          <div className="dashIdentity__footer">
            <Link className="dashIdentity__footer__view" to="/analysis">
              Ver análise completa →
            </Link>
          </div>
        </div>
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
                    Acordes limpos e fluidos para um perfil mais fresco e
                    arejado.
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
            <Link
              className="dashRecomendation__footer__view"
              to="/recommendation"
            >
              Ver todas as recomendações →
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard__wrapper--bottom">
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
        <div className="dashWishlist__content">
          <div className="dashWishlist__header">
            <p className="dashWishlist__header__section-name">Wishlist</p>
            <p className="dashWishlist__header__title">
              3 fragrâncias na sua lista
            </p>
          </div>
          <div className="dashWishlist__container">
            <div className="dashWishlist__box">
              <div className="dashWishlist__wish">
                <img
                  className="dashWishlist__wish__image"
                  src={allureHome}
                  alt="imagem perfume"
                />
                <div className="dashWishlist__wish__texts">
                  <h3 className="dashWishlist__name">
                    Allure Homme Edition Blunch
                  </h3>
                  <p className="dashWishlist__brand">Chanel</p>
                </div>
                <a className="dashWishlist__view-more"></a>
              </div>
              <div className="dashWishlist__wish">
                <img
                  className="dashWishlist__wish__image"
                  src={imagination}
                  alt="imagem perfume"
                />
                <div className="dashWishlist__wish__texts">
                  <h3 className="dashWishlist__name">Imagination</h3>
                  <p className="dashWishlist__brand">Louis Vuitton</p>
                </div>
                <a className="dashWishlist__view-more"></a>
              </div>
              <div className="dashWishlist__wish">
                <img
                  className="dashWishlist__wish__image"
                  src={theOne}
                  alt="imagem perfume"
                />
                <div className="dashWishlist__wish__texts">
                  <h3 className="dashWishlist__name">The One EDP</h3>
                  <p className="dashWishlist__brand">Dolce & Gabbana</p>
                </div>
                <a className="dashWishlist__view-more"></a>
              </div>
            </div>
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
            <Link className="dashBlog__header__cta" to="/blog">
              Ver todos os artigos →
            </Link>
          </div>
          <div className="dashBlog__container">
            <div className="dashBlog__post">
              <div className="dashBlog__image-analise"></div>
              <div className="dashBlog__overlay"></div>
              <div className="dashBlog__texts">
                <p className="dashBlog__post__tag-analise">análise</p>
                <h2 className="dashBlog__post__title">
                  Cebolinha Jequiti: por que viralizou?
                </h2>
                <h3 className="dashBlog__post__subtitle">
                  O perfume de R$50 que esgotou o Brasil.
                </h3>
                <p className="dashBlog__post__time">5 min de leitura</p>
              </div>
              <div className="dashBlog__image"></div>
            </div>
            <div className="dashBlog__post">
              <div className="dashBlog__image-guide"></div>
              <div className="dashBlog__overlay"></div>
              <div className="dashBlog__texts">
                <p className="dashBlog__post__tag-guide">guia</p>
                <h2 className="dashBlog__post__title">
                  Como escolher o próximo perfume da coleção
                </h2>
                <h3 className="dashBlog__post__subtitle">
                  Um guia para entender as lacunas e evoluir seu perfil
                  olfativo.
                </h3>
                <p className="dashBlog__post__time">7 min de leitura</p>
              </div>
              <div className="dashBlog__image"></div>
            </div>
            <div className="dashBlog__post">
              <div className="dashBlog__image-tendencies"></div>
              <div className="dashBlog__overlay"></div>
              <div className="dashBlog__texts">
                <p className="dashBlog__post__tag-tendencies">tendências</p>
                <h2 className="dashBlog__post__title">
                  As famílias olfativas que mais crescem em 2026
                </h2>
                <h3 className="dashBlog__post__subtitle">
                  Do aquático moderno ao gourmand sofisticado: o que está em
                  alta.
                </h3>
                <p className="dashBlog__post__time">6 min de leitura</p>
              </div>
              <div className="dashBlog__image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
