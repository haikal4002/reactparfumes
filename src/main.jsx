import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/global.css";

// FontAwesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faStar,
  faHeart,
  faCheckCircle,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ErrorBoundary from "./components/ErrorBoundary";
library.add(faShoppingBag, faStar, faHeart, faCheckCircle, faBolt, faWhatsapp);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
