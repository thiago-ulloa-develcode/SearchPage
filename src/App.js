import { Route, Routes, BrowserRouter } from "react-router-dom";
import * as React from "react";
import "./App.css";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
