import { createContext, useState } from "react";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [activePopup, setActivePopup] = useState(null);
  const handleOpenPopup = (popup) => {
    setActivePopup(popup);
  };
  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <PopupContext.Provider value={ {activePopup, handleOpenPopup, handleClosePopup} }>
      { children }
    </PopupContext.Provider>
  );
}
