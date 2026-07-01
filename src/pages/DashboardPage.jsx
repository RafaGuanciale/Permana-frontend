import { useWeather } from "../hooks/useWeather";
import DashboardNewCollection from "../components/Dashboard/DashboardNewCollection";
import DashboardHero from "../components/Dashboard/DashboardHero";
import { DashboardCategories } from "../components/Dashboard/DashboardCategories";
import DashboardWishlist from "../components/Dashboard/DashboardWishlist";
import { categories } from "../utils/consts";

function DashboardPage() {
  const { weather } = useWeather();

  return (
    <div className="dashboard__content">
      <DashboardHero weather={weather} />
      <div className="dashboard__wrapper--top">
        <DashboardNewCollection />
      </div>
      <div className="dashboard__wrapper--bottom">
        <DashboardCategories
          items={categories}
        />
        <DashboardWishlist />
      </div>
    </div>
  );
}

export default DashboardPage;
