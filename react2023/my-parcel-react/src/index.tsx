import React from "react";
import { createRoot } from "react-dom";

const App = () => {
  return(
    <React.StrictMode>
    <h1>Pinga webo con Parcel</h1>
      </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);