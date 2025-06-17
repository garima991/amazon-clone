import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"
import store from "./store/store.js";
import { Provider } from "react-redux";


// const layout = (element) => <Layout>{element}</Layout>

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);