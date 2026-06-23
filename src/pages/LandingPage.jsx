import mockupCollection from "../images/mockups/mockup-collection.JPG";
import mockupAnalysis from "../images/mockups/mockup-analysis.JPG";
import author from "../images/Developper/foto_aromatik_3x4.jpg";
import LoginPopup from "../components/Popups/LoginPopup";
import Popup from "../components/Popups/Popup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="home" id="home">
        <div className="home__bg">
          <div className="home__bg--right"></div>
          <div className="home__bg--left"></div>
          <svg
            className="home__divider"
            viewBox="0 0 70 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 70,0 0,100" />
          </svg>
        </div>
        <div className="home__container">
          <div className="home__left">
            <div className="home__eyebrow"></div>
            <p className="home__eyebrow-label">Sua assinatura olfativa</p>
            <h1 className="home__title--brown">Sua coleção,</h1>
            <h1 className="home__title--green">Sua identidade</h1>
            <p className="home__subtitle">
              Organize e descubra o perfil olfativo que define quem você é,
              fragrância por fragrância.
            </p>
            <div className="home__left__buttons">
              <Link
                to="/login"
                className="home__cta-btn--brown"
                id="home__loginBtn"
              >
                ENTRAR
              </Link>
              <Link
                className="home__cta-btn--transparent"
                id="home__exploreBtn"
                to="/about"
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
          <div className="home__right">
            <div className="home__right__container">
              <p className="home__eyebrow-label--right">AROMATIK</p>
              <h1 className="home__quote">
                "Um perfume é a memória que você escolhe carregar."
              </h1>
              <div className="home__eyebrow--right"></div>
              <p className="home__eyebrow-label--right">
                DESCUBRA SUA ASSINATURA
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about-aromatik">
        <div className="about__container">
          <div className="about__eyebrow-main">
            <p className="about__central__eyebrow">O PROJETO</p>
            <h2 className="about__central__title">Conheça o Aromatik</h2>
          </div>
          <div className="about__content-grid">
            <div className="about__collection--left">
              <div className="about__eyebrow--collection"></div>
              <p className="about__eyebrow__label">COLEÇÃO</p>
              <h3 className="about__collection__title">Centralize seus</h3>
              <h4 className="about__collection__subtitle">perfumes</h4>
              <p className="about__collection__paragraph">
                Adicione qualquer perfume buscando pelo nome. Os dados vêm
                direto do catálogo com imagem, marca e descrição já preenchidos
                para você.
              </p>
              <ul className="about__collection__list">
                <li>Busca por nome no catálogo</li>
                <li>Dados preenchidos automaticamente</li>
                <li>Remova a qualquer momento</li>
              </ul>
            </div>
            <div className="about__collection--right">
              <img
                className="about__collection__mockup"
                src={mockupCollection}
                alt=""
              />
            </div>

            <div className="about__eyebrow--middle"></div>

            <div className="about__analysis--left">
              <img
                className="about__analysis__mockup"
                src={mockupAnalysis}
                alt="Mockup da Análise"
              />
            </div>
            <div className="about__analysis--right">
              <div className="about__eyebrow--collection"></div>
              <p className="about__eyebrow__label">ANÁLISE OLFATIVA</p>
              <h3 className="about__collection__title">Entenda sua</h3>
              <h4 className="about__collection__subtitle">
                identidade olfativa
              </h4>
              <p className="about__collection__paragraph">
                O Aromatik analisa as notas de cada perfume e gera um
                diagnóstico real sobre sua coleção, mostrando o perfil
                predominante e o que incluir para tornar sua coleção mais
                completa e equilibrada.
              </p>
              <ul className="about__collection__list">
                <li>Busca por nome no catálogo</li>
                <li>Dados preenchidos automaticamente</li>
                <li>Remova a qualquer momento</li>
              </ul>
            </div>
          </div>
          <Link to="/register" className="about__cta-btn--brown">
            Criar minha conta
          </Link>
        </div>
      </section>
      <section className="author" id="author">
        <div className="author__container">
          <div className="author__picture">
            <img
              src={author}
              alt="Foto do autor Rafael"
              className="author__image"
            />
            <div className="author__image-overlay">
              <p className="author__image-overlay__name">
                Rafael Guanciale Nacarato
              </p>
              <p className="author__image-overlay__job">
                Web developer - Fullstack in training
              </p>
            </div>
          </div>
          <div className="author__info">
            <div className="author__eyebrow"></div>
            <p className="author__eyebrow__label">
              SOBRE O DESENVOLVEDOR & O PROJETO
            </p>
            <h3 className="author__title">Paixão por perfumaria,</h3>
            <h4 className="author__subtitle">aprendizado em código</h4>
            <p className="author__paragraph">
              O Aromatik nasceu da união de duas paixões: o universo das
              fragrâncias e o desenvolvimento web. É o meu laboratório de
              aprendizado, onde cada funcionalidade reflete um novo conceito
              aprendido.
            </p>
            <p className="author__paragraph">
              HTML, CSS, JavaScript e arquitetura orientada a objetos aplicados
              em um produto real, pensado para quem leva a perfumaria a sério.
            </p>
            <div className="author__buttons">
              <a
                href="https://github.com/RafaGuanciale"
                className="author__cta-btn--brown"
                target="_blank"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/rafaelguanciale/"
                className="author__cta-btn--transparent"
                target="_blank"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* {activePopup && (
        <Popup popupClass={"popup__login"}>{<LoginPopup />}</Popup>
      )} */}
    </>
  );
}

export default LandingPage;
