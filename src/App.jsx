import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import AnalysisPage from "./pages/AnalysisPage";
import CategoriesPage from "./pages/CategoriesPage";
import CollectionPage from "./pages/CollectionPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import RecomendationPage from "./pages/RecommendationPage";
import BlogPage from "./pages/BlogPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PopupProvider } from "./contexts/PopupContext";
import PopupManager from "./components/Popups/PopupManager";
import * as auth from "./utils/auth";

function App() {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext);
  const handleRegistration = ({
    name,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    auth.register(name, username, password, email).then(() => {
      alert("Registro bem-sucedido!");
      navigate("/login");
    });
  };

  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/register"
            element={<RegisterPage handleRegistration={handleRegistration} />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
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
            path="/recommendation"
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
          <Route
            path="*"
            element={
              isLogged ? <Navigate to="/dashboard" /> : <Navigate to="/" />
            }
          />
        </Routes>
        <Footer />
      </div>
      <PopupManager />
    </>
  );
}

export default App;
