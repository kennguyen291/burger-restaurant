import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClassicMoviesPage from "./page/ClassicMoviesPage";
import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassicMoviesPage />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
