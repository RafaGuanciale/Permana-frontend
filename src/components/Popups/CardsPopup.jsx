import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";

function CardsPopup(props) {
  const { selectedCard, handleClosePopup } = useContext(PopupContext);

  return (
    <>
      <div className="card__modal">
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
            <li className="cardModal__label cardModal__family">{selectedCard.family}</li>
            <li className="cardModal__label cardModal__occasion">{selectedCard.occasion}</li>
            <li className="cardModal__label cardModal__climate">{selectedCard.climate}</li>
            <li className="cardModal__label cardModal__intensity">{selectedCard.intensity}</li>
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
