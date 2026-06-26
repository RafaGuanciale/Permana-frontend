import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";

function WishlistCard(props) {
  const { name, brand, image, family, card } = props;
  const { handleOpenCardPopup } = useContext(PopupContext);

  const handleCard = (card) => {
    handleOpenCardPopup({
      link: card.link,
      name: card.name,
      brand: card.brand,
      role: card.role,
      mainFamily: card.family,
      mainOccasion: card.occasion,
      mainClimate: card.climate,
      mainIntensity: card.climate,
    });
  };

  return (
    <div
      key={card.name}
      className="wishlist-gallery__item"
      onClick={() => handleCard(card)}
    >
      <img
        className="wishlist-card__thumb wishlist-gallery__thumb"
        src={image}
        alt={name}
      />
      <div>
        <div className="wishlist-gallery__name">{name}</div>
        <div className="wishlist-gallery__brand">{brand}</div>
      </div>
      <div className="wishlist-gallery__tag">
        <span className="wishlist-card__family">{family}</span>
      </div>
    </div>
  );
}
export default WishlistCard;
