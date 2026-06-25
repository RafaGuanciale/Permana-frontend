import { Link } from "react-router-dom";
import coin from "../../images/brand/favicon.svg";

function Logo({ color }) {
  return (
    <Link to="/" className="brand">
      <img className="brand__coin" src={coin} alt="Permana" />
      <span
        className={color === "dark" ? "brand__logo-dark" : "brand__logo-light"}
      >
        ERMANA
      </span>
    </Link>
  );
}

export default Logo;
