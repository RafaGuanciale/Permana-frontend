import heroImage from "../../images/hero/hero__bg-image7.png";

function DashboardHeroFull() {
  return (
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
  );
}

export default DashboardHeroFull;
