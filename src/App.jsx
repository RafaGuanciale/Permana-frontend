import { Route, Routes } from "react-router-dom";
import AnalysisPage from "./pages/AnalysisPage";
import CategoriesPage from "./pages/CategoriesPage";
import CollectionPage from "./pages/CollectionPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NewAccountPage from "./pages/NewAccountPage";
import OnboardingPage from "./pages/OnboardingPage";
import RecomendationPage from "./pages/RecommendationPage";
import BlogPage from "./pages/BlogPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PopupProvider } from "./contexts/PopupContext";
import PopupManager from "./components/Popups/PopupManager";

function App() {

  return (
    <>
      <AuthProvider>
        <PopupProvider>
          <div className="page">
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/newAccount" element={<NewAccountPage />} />
              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <OnboardingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/collection"
                element={
                  <ProtectedRoute>
                    <CollectionPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analysis"
                element={
                  <ProtectedRoute>
                    <AnalysisPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recomendation"
                element={
                  <ProtectedRoute>
                    <RecomendationPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/categories"
                element={
                  <ProtectedRoute>
                    <CategoriesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <ProtectedRoute>
                    <BlogPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <PopupManager />
        </PopupProvider>
      </AuthProvider>
    </>
  );
}

export default App;
