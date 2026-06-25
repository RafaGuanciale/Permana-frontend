import { Link } from "react-router-dom";
import Logo from "../brand/Logo";

function HeroTopbar() {
  return (
    <nav className="hero__topbar">
      <Logo color={"light"} />
      <div className="hero__actions">
        <Link to="/login" className="hero__btn hero__btn--ghost">
          Entrar
        </Link>
      </div>
    </nav>
  );
}

function HeroHeadline() {
  return (
    <h1 className="hero__title">
      <span className="hero__title--ink">Sua coleção,</span>
      <span className="hero__title--green">Sua identidade</span>
    </h1>
  );
}

function HeroDiagonal() {
  return (
    <section className="hero__diagonal">
      <div className="hero__panel hero__panel--paper">
        <span className="hero__rule" aria-hidden="true"></span>
        <p className="hero__eyebrow">Identidade olfativa</p>
        <HeroHeadline />
        <p className="hero__subtitle">
          Seus perfumes contam uma história. <br /> O Permana ajuda a revelá-la.
        </p>
      </div>
      <div className="hero__panel hero__panel--green">
        <p className="hero__quote-label">Permana</p>
        <blockquote className="hero__quote">
          "Um perfume é a memória que você escolhe carregar."
        </blockquote>
        <span className="hero__quote-line" aria-hidden="true"></span>
        <p className="hero__quote-label">Descubra sua assinatura</p>
      </div>
    </section>
  );
}

function Hero2() {
  return (
    <header className="hero" id="home">
      <HeroTopbar />
      <HeroDiagonal />
    </header>
  );
}

export default Hero2;
