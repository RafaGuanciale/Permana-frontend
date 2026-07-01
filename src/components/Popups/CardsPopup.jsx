import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";

function CardsPopup() {
  const { selectedCard, handleClosePopup } = useContext(PopupContext);

  if (!selectedCard) return null;
  return (
    <>
      <div className="card__modal" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Fechar pop-up"
          className="popup__close"
          type="button"
          onClick={handleClosePopup}
        ></button>

        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="cardModal__image"
        />

        <div className="cardModal__content">
          <h2 className="cardModal__name">{selectedCard.name}</h2>
          <p className="cardModal__brand">{selectedCard.brand}</p>
          <div className="cardModal__divisor"></div>
          <p className="cardModal__description">{selectedCard.description}</p>
          <ul className="cardModal__labels">
            <li className="cardModal__label cardModal__family">
              {selectedCard.mainFamily}
            </li>
            <li className="cardModal__label cardModal__occasion">
              {selectedCard.mainOccasion}
            </li>
            <li className="cardModal__label cardModal__climate">
              {selectedCard.mainClimate}
            </li>
            <li className="cardModal__label cardModal__intensity">
              {selectedCard.mainIntensity}
            </li>
          </ul>
          <div className="cardModal__role">
            <h2 className="cardModal__role-title">Papel na coleção</h2>
            <p className="cardModal__role-text">{selectedCard.role}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsPopup;
