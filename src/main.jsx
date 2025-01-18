import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App.jsx";

// Wrap the App component with BrowserRouter without StrictMode
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    {/* Add BrowserRouter here */}
    <App />
  </BrowserRouter>
);
