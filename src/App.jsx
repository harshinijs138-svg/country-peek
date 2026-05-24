
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryPage from './pages/CountryPage';
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />

          <Route
           path="/country/:code"
           element={<CountryPage />}
          />
 
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;