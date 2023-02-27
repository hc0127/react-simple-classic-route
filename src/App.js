import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import First from "./pages/first";
import Second from "./pages/second";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Route path="*" element={<First />} />
      <Route path="/first" element={<First />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  );
}

export default App;
