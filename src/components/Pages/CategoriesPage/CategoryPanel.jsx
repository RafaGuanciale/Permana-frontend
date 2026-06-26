import { categories } from "../../../utils/consts";

function CategoryPanel({
  container,
  openContainer,
  openCategory,
  activeSubcategory,
  setActiveSubcategory,
}) {
  const isOpen = openContainer === container;
  const data = openCategory
    ? categories.find((category) => category.name === openCategory)
    : null;
  const isEmpty = data?.count === 0;

  return (
    <div
      className={`categoriesPage__expand__container ${isOpen ? "categoriesPage__container-active" : ""}`}
    >
      <div className="categoriesPage__expand__content">
        <div className="categoriesPage__subcategories__column">
          <div className="categoriesPage__subcategories__label">Ambiente</div>
          <div className="categoriesPage__subcategories__list">
            {data?.subcats.map((subcategories) => (
              <button
                key={subcategories}
                className={`categoriesPage__subcategories__btn ${activeSubcategory === subcategories ? "categoriesPage__subcategories__btn-active" : ""}`}
                onClick={() => setActiveSubcategory(subcategories)}
              >
                <span className="categoriesPage__subcategories__dot"></span>
                {subcategories}
              </button>
            ))}
          </div>
        </div>

        <div className="categoriesPage__results__column">
          <div className="categoriesPage__results__top">
            <div className="categoriesPage__results__context">
              <div className="categoriesPage__results__eyebrow">
                {openCategory} · {activeSubcategory}
              </div>
              <div className="categoriesPage__results__title">
                {isEmpty ? "Nada à altura, ainda!" : "Perfumes da sua coleção"}
              </div>
            </div>
            <button className="categoriesPage__results__btn">
              <i className="ti ti-sparkles"></i> Recomendações para:{" "}
              {activeSubcategory}
            </button>
          </div>

          {isEmpty ? (
            <div className="categoriesPage__empty">
              <div className="categoriesPage__empty-mark">⌕</div>
              <div className="categoriesPage__empty-title">
                Sua coleção não cobre <em>{activeSubcategory.toLowerCase()}</em>
                .
              </div>
              <p className="categoriesPage__empty-body">
                Nenhum dos seus perfumes se encaixa bem aqui! <br />
                Podemos te direcionar para essa ausência.
              </p>
              <button className="categoriesPage__empty-btn">
                Ver o que recomendamos →
              </button>
            </div>
          ) : (
            <div className="categoriesPage__results__match-list">
              {data?.perfumes.map(([brand, name, reason, score, seal]) => (
                <div className="categoriesPage__results__match-item" key={name}>
                  <img
                    className="categoriesPage__results__match-img"
                    src={defaultImg}
                    alt={name}
                  />
                  <div className="categoriesPage__results__match-info">
                    <div className="categoriesPage__results__match-brand">
                      {brand}
                    </div>
                    <div className="categoriesPage__results__match-name">
                      {name}
                    </div>
                    <div className="categoriesPage__results__match-reason">
                      {reason}
                    </div>
                  </div>
                  <div className="categoriesPage__results__match-score">
                    <span className="categoriesPage__results__match-pct">
                      {score}%
                    </span>
                    <span
                      className={`categoriesPage__results__match-seal ${
                        seal === "Excelente"
                          ? "categoriesPage__results__seal-excelent"
                          : "categoriesPage__results__seal-good"
                      }`}
                    >
                      {seal}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPanel;
