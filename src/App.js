import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClassicMoviesPage from "./page/ClassicMoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassicMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
