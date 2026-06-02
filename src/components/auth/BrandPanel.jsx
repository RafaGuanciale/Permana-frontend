function BrandPanel() {
  return (
    <div className="registerPage__container__left">
      <div class="registerPage__deco-1"></div>
      <div class="registerPage__deco-2"></div>
      <div className="registerPage__left__logo">
        Aromati<span className="registerPage__logo__span">k</span>
      </div>
      <div className="registerPage__left__content">
        <p className="registerPage__left__title">
          Sua coleção,
          <br />
          sua identidade.
        </p>
        <p className="registerPage__left__description">
          Descubra o que os seus perfumes dizem sobre você. Analise sua coleção
          e encontre o que está faltando.
        </p>
        <div className="registerPage__left__tags">
          <span className="registerPage__left__tag">Amadeirado</span>
          <span className="registerPage__left__tag">Cítrico</span>
          <span className="registerPage__left__tag">Oriental</span>
          <span className="registerPage__left__tag">Floral</span>
          <span className="registerPage__left__tag">Aquático</span>
        </div>
      </div>
      <div className="registerPage__left__footer">
        Aromatik · Identidade olfativa
      </div>
    </div>
  );
}

export default BrandPanel;