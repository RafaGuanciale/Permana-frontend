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
import LandingPageNew from "./pages/LandingPageNew";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "./contexts/UserContext";
import PopupManager from "./components/Popups/PopupManager";
import * as api from "./utils/api";
import * as auth from "./utils/auth";
import { getToken } from "./utils/token";
import Loader from "./components/Loading/Loader";
import CadastroFeedback from "./components/Loading/CadastroFeedback";
import { ToastContext } from "./contexts/ToastContext";
import AddPerfumeToast from "./components/Toasts/AddPerfumeToast";

function App() {
  const [loading, setLoading] = useState(!!getToken());
  const [logginIn, setLogginIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const { isLogged, login, logout } = useContext(AuthContext);
  const { updateUser } = useContext(UserContext);
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = ({
    name,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    setRegisterError("");
    if (!name || !email || !password) {
      setRegisterError("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setRegisterError("As senhas não coincidem.");
      return;
    }
    setRegistering("loading");
    auth
      .register(name, username, password, email)
      .then(() => {
        setUserName(name);
        setRegistering("success");
        setTimeout(() => {
          setRegistering(false);
          navigate("/login");
        }, 3600);
      })
      .catch((err) => {
        setRegisterError("Não foi possível criar a conta. Tente novamente.");
          setRegistering("error");
        setTimeout(() => {
          setRegistering(false);
        }, 3000);
      });
  };

  const handleLogin = ({ email, password }) => {
    setLoginError("");
    if (!email || !password) {
      setLoginError("Por favor, preencha todos os campos.");
      return;
    }
    setLogginIn(true);
    auth
      .authorize(email, password)
      .then((data) => {
        return auth.checkToken(data.token).then((userData) => {
          updateUser(userData);
          login(data);
          const redirectPath = location.state?.from?.pathname || "/dashboard";
          navigate(redirectPath);
        });
      })
      .catch(() => {
        setLoginError("E-mail ou senha incorretos.");
      })
      .finally(() => setLogginIn(false));
  };

  const handleDeleteAccount = ({ password }) => {
    setDeleteError("");
    if (!password) {
      setDeleteError("Por favor, digite sua senha para confirmar.");
      return;
    }

    const confirmed = window.confirm(
      "Excluir a sua conta? A sua coleção e a sua identidade olfativa serão apagadas para sempre. Não dá para desfazer.",
    );
    if (!confirmed) return;

    api
      .deleteAccount(getToken(), password)
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((err) => {
        setDeleteError(
          "Não foi possível excluir a conta. Verifique sua senha e tente novamente.",
        );
      });
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
    return <Loader fullscreen message="Preparando sua identidade olfativa" />;
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
                <RegisterPage
                  handleRegistration={handleRegistration}
                  errorMessage={registerError}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute anonymous>
                <LoginPage
                  handleLogin={handleLogin}
                  errorMessage={loginError}
                />
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
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage
                  onDelete={handleDeleteAccount}
                  errorMessage={deleteError}
                />
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
      {logginIn && (
        <Loader scrim message="Reativando o servidor — só um instante" />
      )}
      {registering && <CadastroFeedback status={registering} nome={userName} />}
      {toast && <AddPerfumeToast perfumeName={toast} />}
    </>
  );
}

export default App;
