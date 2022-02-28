import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassicMoviesPage from "./page/ClassicMoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ClassicMovies" element={<ClassicMoviesPage />} />
        {/* <Route path="/ErrorPage" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
