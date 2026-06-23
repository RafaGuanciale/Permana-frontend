import { Link } from "react-router-dom";

function HeroOld() {
  return (
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
  );
}

export default HeroOld;
