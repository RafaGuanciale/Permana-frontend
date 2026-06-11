function DashboardCollectionSkeleton() {
  return (
    <div
      className="dashCollection__content"
      aria-busy="true"
      aria-label="Carregando sua coleção"
    >
      <div className="dashCollection__header">
        <div className="dashCollection__header__text">
          <span className="dashCollection__skeleton dashCollection__skeleton--eyebrow" />
          <span className="dashCollection__skeleton dashCollection__skeleton--title" />
        </div>
      </div>

      <div className="dashCollection__carousel">
        <div className="dashCollection__row">
          <div className="dashCollection__viewport">
            <div className="dashCollection__grid">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="dashCollection__card dashCollection__card--skeleton"
                  key={i}
                >
                  <div className="dashCollection__skeleton dashCollection__card__image" />
                  <div className="dashCollection__card__info">
                    <span className="dashCollection__skeleton dashCollection__skeleton--line" />
                    <span className="dashCollection__skeleton dashCollection__skeleton--line-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashCollection__card__new dashCollection__card__new--skeleton">
            <div className="dashCollection__new__info">
              <p className="dashCollection__new__icon">+</p>
              <p className="dashCollection__new__label">Adicionar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashCollection__footer">
        <span className="dashCollection__skeleton dashCollection__skeleton--link" />
      </div>
    </div>
  );
}

export default DashboardCollectionSkeleton;
