import { useContext, useRef, useState } from "react";
import { categories } from "../../../utils/consts";
import { CollectionContext } from "../../../contexts/CollectionContext";

function CategoryPanel({
  container,
  openContainer,
  openCategory,
  activeSubcategory,
  setActiveSubcategory,
}) {
  const { perfumeByCategory } = useContext(CollectionContext);
  const panelRef = useRef(null);
  const [displayedCategory, setDisplayedCategory] = useState(openCategory);

const isOpen = openContainer === container;

if (isOpen && openCategory !== displayedCategory) {
  setDisplayedCategory(openCategory);
}

  const handleTransitionEnd = (event) => {
    if (event.target !== panelRef.current) return;
    if (event.propertyName !== "max-height") return;
    if (!isOpen) {
      setDisplayedCategory("");
    }
  };

  const data = displayedCategory
    ? categories.find((category) => category.name === displayedCategory)
    : null;
  const categorySize = perfumeByCategory[displayedCategory?.toLowerCase()];
  const isEmpty = !categorySize || categorySize.length === 0;

  return (
    <div
      ref={panelRef}
      onTransitionEnd={handleTransitionEnd}
      className={`categoriesPage__expand__container ${isOpen ? "categoriesPage__container-active" : ""}`}
    >
      <div className="categoriesPage__expand__content">
        <div className="categoriesPage__subcategories__column">
          <div className="categoriesPage__subcategories__label">Ambiente</div>
          <div className="categoriesPage__subcategories__list">
            {data?.subcats.map((subcategory) => (
              <button
                key={subcategory}
                className={`categoriesPage__subcategories__btn ${activeSubcategory === subcategory ? "categoriesPage__subcategories__btn-active" : ""}`}
                onClick={() => setActiveSubcategory(subcategory)}
              >
                <span className="categoriesPage__subcategories__dot"></span>
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        <div className="categoriesPage__results__column">
          <div className="categoriesPage__results__top">
            <div className="categoriesPage__results__context">
              <div className="categoriesPage__results__eyebrow">
                {displayedCategory} · {activeSubcategory}
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
              {perfumeByCategory[displayedCategory?.toLowerCase()]?.map(
                (perfume) => (
                  <div
                    className="categoriesPage__results__match-item"
                    key={perfume.perfumeId._id}
                  >
                    <img
                      className="categoriesPage__results__match-img"
                      src={perfume.perfumeId.link}
                      alt={perfume.perfumeId.name}
                    />
                    <div className="categoriesPage__results__match-info">
                      <div className="categoriesPage__results__match-brand">
                        {perfume.perfumeId.brand}
                      </div>
                      <div className="categoriesPage__results__match-name">
                        {perfume.perfumeId.name}
                      </div>
                    </div>
                    <div className="categoriesPage__results__match-score"></div>
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPanel;
