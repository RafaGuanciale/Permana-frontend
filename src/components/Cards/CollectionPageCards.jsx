import { useState, useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import Popup from "../Popups/Popup";
import CardsPopup from "../Popups/CardsPopup";
import setaDireita from "../../images/icons/right_arrow.png";

function CollectionPageCards(props) {
  const { name, brand, image, card } = props;
  const { family, occasion, climate, intensity } = card;
  const { handleOpenCardPopup } = useContext(PopupContext);

  const handleCard = (card) => {
    handleOpenCardPopup(card);
  };
  return (
    <div className="collectionPage__list__item" onClick={() => handleCard(card)}>
      <img className="collectionPage__item__img" src={image} alt="" />
      <div className="collectionPage__item__info">
        <p className="collectionPage__item__brand">{brand}</p>
        <p className="collectionPage__item__name">{name}</p>
        <div className="collectionPage__item__tags">
          <span className="collectionPage__item__tag">{family}</span>
          <span className="collectionPage__item__tag">{occasion}</span>
          <span className="collectionPage__item__tag">{climate}</span>
          <span className="collectionPage__item__tag">{intensity}</span>
        </div>
      </div>
      <img className="collectionPage__item__arrow" src={setaDireita} alt="" />
    </div>
  );
}
export default CollectionPageCards;
