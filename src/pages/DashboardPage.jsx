import { useContext } from "react";
import { CollectionContext } from "../contexts/CollectionContext";
import { PopupContext } from "../contexts/PopupContext";
import { useWeather } from "../hooks/useWeather";
import CollectionCard from "../components/Cards/CollectionCards";
import DashboardNewCollection from "../components/Dashboard/DashboardNewCollection";
import DashboardHero from "../components/Dashboard/DashboardHero";
import DashboardCategories from "../components/Dashboard/DashboardCategories";
import { CategoriesCard } from "../components/Dashboard/CategoriesCard";
import DashboardWishlist from "../components/Dashboard/DashboardWishlist";
import { categories } from "../utils/consts";

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
      <div className="dashboard__wrapper--bottom">
        <CategoriesCard
          items={categories}
          onSeeAll={() => console.log("Ver todas")}
          onSelect={(category) => console.log(category)}
        />
        <DashboardWishlist />
      </div>
    </div>
  );
}

export default DashboardPage;
