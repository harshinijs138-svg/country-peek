import { Routes, Route } from "react-router-dom";
import CountryPage from './pages/CountryPage';
import Header from "./components/Header";
import Favourites from './pages/Favourites';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./styles/App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/country/:code" element={<CountryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;