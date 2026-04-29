import { useContext } from "react";

export default function Popup(props) {
  const { popupClass, children } = props;
  return (
    <div className={`popup ${popupClass}`}>
      {children}
    </div>
  );
}
