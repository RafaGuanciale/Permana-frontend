import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CategoriesPage from "./pages/CategoriesPage";
import CollectionPage from "./pages/CollectionPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPageNew from "./pages/LandingPageNew"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PopupProvider } from "./contexts/PopupContext";
import { UserContext } from "./contexts/UserContext";
import PopupManager from "./components/Popups/PopupManager";
import * as auth from "./utils/auth";
import * as api from "./utils/api";
import { setToken, getToken } from "./utils/token";
import DashboardCollectionSkeleton from "./components/Loading/DashboardCollectionSkeleton";

function App() {
  const [loading, setLoading] = useState(!!getToken);
  const { isLogged, login } = useContext(AuthContext);
  const { updateUser } = useContext(UserContext);
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
        auth.checkToken(data.token).then((userData) => {
          updateUser(userData);
          login(data);
          const redirectPath = location.state?.from?.pathname || "/dashboard";
          navigate(redirectPath);
        });
      })
      .catch(console.error);
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }

    auth
      .checkToken(jwt)
      .then((data) => {
        login({
          token: jwt,
        });
        updateUser(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    if (loading) {
    return <DashboardCollectionSkeleton />;
  }

  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute anonymous>
                <LandingPageNew />
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
            path="/categories"
            element={
              <ProtectedRoute>
                <CategoriesPage />
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
        <Footer2 />
      </div>
      <PopupManager />
    </>
  );
}

export default App;
