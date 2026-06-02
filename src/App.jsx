import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
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
import { AuthProvider } from "./contexts/AuthContext";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PopupProvider } from "./contexts/PopupContext";
import PopupManager from "./components/Popups/PopupManager";
import * as auth from "./utils/auth";
import * as api from "./utils/api";
// import { setToken, getToken } from "./utils/token";

function App() {
  const { isLogged, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

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
    auth
      .register(name, username, password, email)
      .then(() => {
        alert("Registro bem-sucedido!");
        navigate("/login");
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    auth
      .authorize(email, password)
      .then((data) => {
        login(data);
        // setToken(data.jwt);
        const redirectPath = location.state?.from?.pathname || "/dashboard";
        navigate(redirectPath);
      })
      .catch(console.error);
  };

  // useEffect(() => {
  //   const jwt = getToken();
  //   if (!jwt) {
  //     return;
  //   }
  //   api
  //     .getUserInfo(jwt)
  //     .then((data) => {
  //       login(data);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute anonymous>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute anonymous>
                <RegisterPage handleRegistration={handleRegistration} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute anonymous>
                <LoginPage handleLogin={handleLogin} />
              </ProtectedRoute>
            }
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
