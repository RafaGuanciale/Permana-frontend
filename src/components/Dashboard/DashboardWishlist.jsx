import { initialCards } from "../../utils/consts";
import WishlistCard from "../Cards/WishlistCard";

function DashboardWishlist({
  items = initialCards,
  // onAdd = null,
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
        {/* <button
          type="button"
          className="wishlist-card__add"
          onClick={onAdd}
        >
          + Adicionar
        </button> */}
      </div>

      <div className="wishlist-gallery">
        {visibleItems.map((card) => (
          <WishlistCard
            key={card.id}
            name={card.name}
            brand={card.brand}
            image={card.link}
            family={card.family}
            card={card}
          />
        ))}
      </div>

      <div className="wishlist-card__footer">
        <button
          type="button"
          className="wishlist-card__seeall"
          onClick={onSeeAll}
        >
          Ver wishlist completa (Em breve) →
        </button>
      </div>
    </div>
  );
}

export default DashboardWishlist;
