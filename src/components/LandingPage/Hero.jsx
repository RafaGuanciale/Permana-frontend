import { Link } from "react-router-dom";
import coin from "../../images/brand/favicon.svg";

function Hero() {
  return (
    <header className="hero" id="home">
      <nav className="hero__topbar">
        <Link to="/" className="brand">
          <img className="brand__coin" src={coin}></img>
          <span className="brand__logo">ERMANA</span>
        </Link>
        <div className="hero__actions">
          <Link to="/login" className="btn btn--ghost">
            Entrar
          </Link>
          <Link to="/register" className="btn btn--solid">
            Começar
          </Link>
        </div>
      </nav>

      <div className="hero__container">
        <p className="eyebrow">Identidade olfativa</p>
        <h1 className="hero__title">
          <span className="hero__title--ink">Sua coleção</span>
          <span className="hero__title--green">diz quem você é.</span>
        </h1>
        <div className="hero__lead">
          <p className="hero__subtitle">
            O Permana escuta sua coleção de perfumes, traduz o que ela diz sobre
            você e revela o que falta para completá-la.
          </p>
          <Link to="/register" className="btn btn--solid btn--lg">
            Criar minha identidade
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;