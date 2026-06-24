import React from "react";
import { initialCards } from "../../utils/consts";

function DashboardWishlist({
  items = initialCards,
  onAdd = null,
  onSeeAll = null,
}) {
  const visibleItems = items.slice(0, 3);

  return (
    <div className="wishlist-card">
      <div className="wishlist-card__head">
        <div>
          <p className="wishlist-card__eyebrow">Wishlist</p>
          <h3 className="wishlist-card__title">
            {items.length} fragrâncias na sua lista
          </h3>
        </div>
        <button type="button" className="wishlist-card__add" onClick={onAdd}>
          + Adicionar
        </button>
      </div>

      <div className="wishlist-gallery">
        {visibleItems.map((item) => (
          <div
            key={item.name}
            className="wishlist-gallery__item"
            onClick={null}
          >
            <img
              className="wishlist-card__thumb wishlist-gallery__thumb"
              src={item.link}
            />
            <div>
              <div className="wishlist-gallery__name">{item.name}</div>
              <div className="wishlist-gallery__brand">{item.brand}</div>
            </div>
            <div className="wishlist-gallery__tag">
              <span className="wishlist-card__family">{item.family}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="wishlist-card__footer">
        <button
          type="button"
          className="wishlist-card__seeall"
          onClick={onSeeAll}
        >
          Ver wishlist completa →
        </button>
      </div>
    </div>
  );
}

export default DashboardWishlist;
