import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components1/App";
import "./index.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
