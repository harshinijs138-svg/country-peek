import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext'
function Header() {
const { theme, toggleTheme } = useTheme()
  return (
    <header>
      <h1>CountryPeek</h1>

      <nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  );
}

export default Header;