import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import Popup from "./Popup";
import LoginPopup from "./LoginPopup";
import ProfileMenu from "./ProfileMenu";
import EditProfilePopup from "./EditProfilePopup";
import CardsPopup from "./CardsPopup";
import PerfumesDrawer from "./PerfumesDrawer";
import Logout from "./LogoutPopup";

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
          <ProfileMenu />
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

      {activePopup === "drawer" && (
        <Popup popupClass="popup__drawer">
          <PerfumesDrawer />
        </Popup>
      )}

      {activePopup === "logout" && (
        <Popup popupClass="popup__logout">
          <Logout />
        </Popup>
      )}
    </>
  );
}

export default PopupManager;
