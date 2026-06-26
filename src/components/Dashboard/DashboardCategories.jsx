import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CategoryTile({ name, count, image, featured, onClick }) {
  return (
    <div
      className={`categoriesCard__tile ${
        featured ? "categoriesCard__tile-featured" : ""
      }`}
      onClick={onClick}
    >
      <div className="categoriesCard__tile-imageWrap">
        <img className="categoriesCard__tile-image" src={image} alt={name} />
      </div>
      <div className="categoriesCard__tile-overlay" />
      <span className="categoriesCard__tile-count">
        {count} {count === 1 ? "fragrância" : "fragrâncias"}
      </span>
      <span className="categoriesCard__tile-label">{name}</span>
      <span className="categoriesCard__tile-cta">Explorar →</span>
    </div>
  );
}

export function DashboardCategories({ items }) {
  const navigate = useNavigate();

  function navigateToCategorie(category, container) {
    navigate("/categories", {
      state: {
        category,
        container,
      },
    });
  }

  return (
    <div className="categoriesCard">
      <div className="categoriesCard__head">
        <div>
          <p className="categoriesCard__eyebrow">Categorias &amp; ocasiões</p>
          <h3 className="categoriesCard__title">Explore por ocasião</h3>
        </div>
        <Link className="categoriesCard__seeall" to="/categories">
          Ver todas →
        </Link>
      </div>
      <div className="categoriesCard__grid">
        {items.map((item) => (
          <CategoryTile
            key={item.name}
            name={item.name}
            count={item.count}
            image={item.image}
            featured={item.featured}
            onClick={() => navigateToCategorie(item.name, item.container)}
          />
        ))}
      </div>
    </div>
  );
}
