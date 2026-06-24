import { useContext } from "react";
import { CollectionContext } from "../contexts/CollectionContext";
import { PopupContext } from "../contexts/PopupContext";
import { useWeather } from "../hooks/useWeather";
import CollectionCard from "../components/Cards/CollectionCards";
import DashboardBlog from "../components/Dashboard/DashboardBlog";
import DashboardNewCollection from "../components/Dashboard/DashboardNewCollection";
import DashboardHero from "../components/Dashboard/DashboardHero";
import DashboardIdentity from "../components/Dashboard/DashboardIdentity";
import DashboardRecomendation from "../components/Dashboard/DashboardRecomendation";
import DashboardCategories from "../components/Dashboard/DashboardCategories";
import DashboardWishlist from "../components/Dashboard/DashboardWishlist"; 

function DashboardPage() {
  const { handleOpenPopup } = useContext(PopupContext);
  const { collection } = useContext(CollectionContext);
  const isEmpty = collection.length === 0;
  const { weather } = useWeather();

  return (
    <div className="dashboard__content">
      <DashboardHero weather={weather} />
      <div className="dashboard__wrapper--top">
        <DashboardNewCollection />
      </div>
      {/* <div className="dashboard__wrapper--middle">
        <DashboardIdentity />
        <DashboardRecomendation />
      </div> */}
      <div className="dashboard__wrapper--bottom">
        <DashboardCategories />
        <DashboardWishlist />
      </div>
      <div className="dashboard__wrapper--blog">
        {/* <DashboardBlog /> */}
      </div>
    </div>
  );
}

export default DashboardPage;
