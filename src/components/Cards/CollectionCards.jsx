import { useState, useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import Popup from "../Popups/Popup";
import CardsPopup from "../Popups/CardsPopup";
import { CollectionContext } from "../../contexts/CollectionContext";

function CollectionCards(props) {
  const { name, brand, image, card } = props;
  const { handleOpenCardPopup } = useContext(PopupContext);
  const { removePerfume } = useContext(CollectionContext);

  const handleCard = (card) => {
    handleOpenCardPopup({
      ...card.perfumeId,
      role: card.role,
    });
  };

  const handleRemove = (e) => {
    e.stopPropagation();

    const confirmation = confirm("Tem certeza que deseja remover?");
    if (!confirmation) return;
    removePerfume(card.perfumeId._id);
  };

  return (
    <div className="dashCollection__card" onClick={() => handleCard(card)}>
      <img src={image} alt={name} className="dashCollection__card__image" />
      <button
        aria-label="Excluir cartão"
        className="dashCollection__card__delete-button "
        type="button"
        onClick={handleRemove}
      ></button>
      <div className="dashCollection__card__info">
        <p className="dashCollection__card__name">{name}</p>
        <p className="dashCollection__card__brand">{brand}</p>
      </div>
    </div>
  );
}
export default CollectionCards;
