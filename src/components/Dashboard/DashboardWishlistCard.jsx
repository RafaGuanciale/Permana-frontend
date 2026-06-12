import React from "react";
import { initialCards } from "../../utils/consts";

function FamilyTag({ children }) {
  return <span className="wishlist-card__family">{children}</span>;
}

// function ListLayout({ items, onAdd }) {
//   return (
//     <div className="wishlist-list">
//       {items.map((it, i) => (
//         <ListRow key={it.name} index={i} item={it} onAdd={onAdd} />
//       ))}
//     </div>
//   );
// }
// function ListRow({ index, item, onAdd }) {
//   const { name, brand, family, tint } = item;
//   const num = String(index + 1).padStart(2, "0");
//   return (
//     <div className="wishlist-list__row">
//       <span className="wishlist-list__num">{num}</span>
//       <div
//         className="wishlist-card__thumb wishlist-list__thumb"
//         style={{ backgroundColor: tint }}
//       />
//       <div className="wishlist-list__info">
//         <div className="wishlist-list__name">{name}</div>
//         <div className="wishlist-list__meta">
//           <span className="wishlist-list__brand">{brand}</span>
//           <FamilyTag>{family}</FamilyTag>
//         </div>
//       </div>
//       <button
//         type="button"
//         className="wishlist-list__add"
//         onClick={() => onAdd && onAdd(item)}
//       >
//         + Coleção
//       </button>
//     </div>
//   );
// }

function GalleryLayout({ items, onSelect }) {
  return (
    <div className="wishlist-gallery">
      {items.map((it) => (
        <div
          key={it.name}
          className="wishlist-gallery__item"
          onClick={() => onSelect && onSelect(it)}
        >
          <img
            className="wishlist-card__thumb wishlist-gallery__thumb"
            src={it.link}
          />
          <div>
            <div className="wishlist-gallery__name">{it.name}</div>
            <div className="wishlist-gallery__brand">{it.brand}</div>
          </div>
          <div className="wishlist-gallery__tag">
            <FamilyTag>{it.family}</FamilyTag>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WishlistCard({
  items = initialCards,
  onAdd,
  onSeeAll,
  style,
}) {
  const visibleItems = items.slice(0, 3);

  return (
    <div className="wishlist-card" style={style}>
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

      <GalleryLayout items={visibleItems} />

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
