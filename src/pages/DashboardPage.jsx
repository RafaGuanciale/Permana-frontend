import { useContext } from "react";
import { Link } from "react-router-dom";
import { CollectionContext } from "../contexts/CollectionContext";
import { PopupContext } from "../contexts/PopupContext";
import CollectionCard from "../components/Cards/CollectionCards";
import DashboardBlog from "../components/Dashboard/DashboardBlog";
import DashboardNewCollection from "../components/Dashboard/DashboardNewCollection";
import { DashboardHero } from "../components/Dashboard/DashboardHero";
// import DashboardHero from "../components/Dashboard/DashboardHero";
import DashboardIdentity from "../components/Dashboard/DashboardIdentity";
import DashboardRecomendation from "../components/Dashboard/DashboardRecomendation";
import DashboardSugestion from "../components/Dashboard/DashboardSugestion";
import DashboardCategories from "../components/Dashboard/DashboardCategories";
import DashboardWishlist from "../components/Dashboard/DashboardWishlist";

function DashboardPage() {
  const { handleOpenPopup } = useContext(PopupContext);
  const { collection } = useContext(CollectionContext);
  const isEmpty = collection.length === 0;

  return (
    <div className="dashboard__content">
      <DashboardHero />
      <div className="dashboard__wrapper--top">
        <DashboardNewCollection />
      </div>
      <div className="dashboard__wrapper--middle">
        <DashboardIdentity />
        <DashboardRecomendation />
      </div>
      <div className="dashboard__wrapper--bottom">
        <DashboardSugestion />
        <DashboardCategories />
        <DashboardWishlist />
      </div>
      <div className="dashboard__wrapper--blog">
        <DashboardBlog />
      </div>
    </div>
  );
}

export default DashboardPage;
