import { createContext, useState } from "react";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [activePopup, setActivePopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpenPopup = (popup) => {
    setActivePopup(popup);
    console.log("Popup aberto:", popup);
  };
  const handleClosePopup = () => {
    setActivePopup(null);
    setSelectedCard(null);
  };
  const handleOpenCardPopup = (card) => {
    setSelectedCard(card);
    setActivePopup("card");
  };

  return (
    <PopupContext.Provider
      value={{ activePopup, selectedCard, handleOpenPopup, handleOpenCardPopup, handleClosePopup }}
    >
      {children}
    </PopupContext.Provider>
  );
}
