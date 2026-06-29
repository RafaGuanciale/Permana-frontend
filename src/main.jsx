import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { PopupProvider } from "./contexts/PopupContext";
import { UserProvider } from "./contexts/UserContext.jsx";
import { CollectionProvider } from "./contexts/CollectionContext.jsx";
import { ToastProvider } from "./contexts/ToastContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <CollectionProvider>
            <PopupProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </PopupProvider>
          </CollectionProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
