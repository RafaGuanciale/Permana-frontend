import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import Popup from "./Popup";
import LoginPopup from "./LoginPopup";
import ProfilePopup from "./ProfilePopup";
import EditProfilePopup from "./EditProfilePopup";
import CardsPopup from "./CardsPopup";

function PopupManager() {
  const { activePopup } = useContext(PopupContext);

  return (
    <>
      {activePopup === "login" && (
        <Popup popupClass="popup__login">
          <LoginPopup />
        </Popup>
      )}

      {activePopup === "profile" && (
        <Popup popupClass="popup__profile">
          <ProfilePopup />
        </Popup>
      )}

      {activePopup === "edit" && (
        <Popup popupClass="popup__profile-edit">
          <EditProfilePopup />
        </Popup>
      )}

      {activePopup === "card" && (
        <Popup popupClass="popup__cards">
          <CardsPopup />
        </Popup>
      )}
    </>
  );
}

export default PopupManager;
