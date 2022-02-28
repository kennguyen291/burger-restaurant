import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassicMoviesPage from "./page/ClassicMoviesPage";
import ErrorPage from "./components/errorComponent/ErrorComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassicMoviesPage />} />
        {/* <Route path="/ErrorPage" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
