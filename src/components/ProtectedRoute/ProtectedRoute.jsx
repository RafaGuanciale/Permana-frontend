import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function ProtectedRoute({ children, anonymous = false }) {
  const { isLogged } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && isLogged) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
