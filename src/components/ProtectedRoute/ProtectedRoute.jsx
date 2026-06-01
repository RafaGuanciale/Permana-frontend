import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { isLogged } = useContext(AuthContext)

  return (
    isLogged ? children : <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
