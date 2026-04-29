import { Route, Routes } from "react-router-dom";
import AnalysePage from "./pages/AnalysePage";
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
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PopupContext, PopupProvider } from "./contexts/PopupContext";

function App() {
  // const authContext = useContext(AuthContext);

  return (
    <>
      <AuthProvider>
        <PopupProvider>
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
              path="/analyse"
              element={
                <ProtectedRoute>
                  <AnalysePage />
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
        </PopupProvider>
      </AuthProvider>
    </>
  );
}

export default App;
