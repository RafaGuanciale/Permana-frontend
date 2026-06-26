function CategoriesPageSkeleton() {
  return (
    <section
      className="categoriesPage"
      id="categoriesPage"
      aria-busy="true"
      aria-label="Carregando categorias"
    >
      <div className="categoriesPage__header">
        <div className="categoriesPage__header__circle-1"></div>
        <div className="categoriesPage__header__circle-2"></div>

        <span className="categoriesPage__skeleton categoriesPage__skeleton--eyebrow" />
        <span className="categoriesPage__skeleton categoriesPage__skeleton--title" />
        <span className="categoriesPage__skeleton categoriesPage__skeleton--subtitle" />
      </div>

      <div className="categoriesPage__container">
        <span className="categoriesPage__skeleton categoriesPage__skeleton--smart" />

        {[0, 1].map((row) => (
          <div
            className={row === 0 ? "categoriesPage__container-top" : "categoriesPage__container-bottom"}
            key={row}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <div className="categoriesPage__card categoriesPage__card--skeleton">
                  <span className="categoriesPage__skeleton categoriesPage__card-image--skeleton" />
                </div>
              </li>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesPageSkeleton;
