import { useContext, useEffect } from "react";
import { PopupContext } from "../../contexts/PopupContext";

export default function Popup(props) {
  const { popupClass, children } = props;
  const { handleClosePopup } = useContext(PopupContext);
useEffect(() => {
  const handleEscBtn = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
    }
  };
  document.addEventListener("keydown", handleEscBtn);
  return () => {
    document.removeEventListener("keydown", handleEscBtn);
  };
}, [handleClosePopup]);
  return (
    <div
      className={`popup ${popupClass}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClosePopup();
        }
      }}
    >
      {children}
    </div>
  );
}
 