import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta" id="cta">
      <div className="cta__inner">
        <p className="cta__quote">
          “Cada frasco guarda uma parte de quem você é.”
        </p>
        <h2 className="cta__title">
          <span className="cta__title--light">Descubra sua</span>
          <span className="cta__title--soft">assinatura olfativa.</span>
        </h2>
        <p className="cta__note">
          Gratuito. Leva menos de um minuto para começar.
        </p>
        <Link to="/register" className="cta__btn cta__btn--paper">
          Criar conta gratuita
          <span className="cta__btn__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
export default CallToAction;
