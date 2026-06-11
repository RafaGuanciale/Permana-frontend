import { Link } from "react-router-dom";
import theOne from "../../images/perfumes/theOne.jpg";
import imagination from "../../images/perfumes/imagination.jpeg";
import allureHome from "../../images/perfumes/allure_homme_edition_blunch.jpg";

function DashboardWishlist() {
  return (
    <div className="dashWishlist__content">
      <div className="dashWishlist__header">
        <p className="dashWishlist__header__section-name">Wishlist</p>
        <p className="dashWishlist__header__title">
          3 fragrâncias na sua lista
        </p>
      </div>
      <div className="dashWishlist__container">
        <div className="dashWishlist__box">
          <div className="dashWishlist__wish">
            <img
              className="dashWishlist__wish__image"
              src={allureHome}
              alt="imagem perfume"
            />
            <div className="dashWishlist__wish__texts">
              <h3 className="dashWishlist__name">
                Allure Homme Edition Blunch
              </h3>
              <p className="dashWishlist__brand">Chanel</p>
            </div>
            <a className="dashWishlist__view-more"></a>
          </div>
          <div className="dashWishlist__wish">
            <img
              className="dashWishlist__wish__image"
              src={imagination}
              alt="imagem perfume"
            />
            <div className="dashWishlist__wish__texts">
              <h3 className="dashWishlist__name">Imagination</h3>
              <p className="dashWishlist__brand">Louis Vuitton</p>
            </div>
            <a className="dashWishlist__view-more"></a>
          </div>
          <div className="dashWishlist__wish">
            <img
              className="dashWishlist__wish__image"
              src={theOne}
              alt="imagem perfume"
            />
            <div className="dashWishlist__wish__texts">
              <h3 className="dashWishlist__name">The One EDP</h3>
              <p className="dashWishlist__brand">Dolce & Gabbana</p>
            </div>
            <a className="dashWishlist__view-more"></a>
          </div>
        </div>
      </div>
      <div className="dashWishlist__footer">
        <Link className="dashWishlist__footer__view" to="#">
          Ver wishlist completa →
        </Link>
      </div>
    </div>
  );
}

export default DashboardWishlist;
