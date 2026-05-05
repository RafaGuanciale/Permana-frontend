import { useContext, useEffect } from "react";
import { PopupContext } from "../../contexts/PopupContext";

export default function Popup(props) {
  const { popupClass, children } = props;
  const { handleClosePopup, activePopup } = useContext(PopupContext);
  const handleEscBtn = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscBtn);

    return () => {
      document.removeEventListener("keydown", handleEscBtn);
    };
  }, [activePopup]);
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
