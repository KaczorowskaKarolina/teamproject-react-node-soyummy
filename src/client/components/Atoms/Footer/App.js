import logo from "./logo.svg";
import fb from "./fb.svg";
import yt from "./yt.svg";
import twiter from "./twiter.svg";
import instagram from "./instagram.svg";
import "./App.css";

function App() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="app-name">So Yummy</span>
          </div>
        </div>
        <div className="additional-content">
          <span className="footer-link">Ingredients</span>
          <br />
          <span className="footer-link">Add recipes</span>
          <br />
          <span className="footer-link">My recipes</span>
          <br />
          <span className="footer-link">Favorite</span>
          <br />
          <span className="footer-link">Shopping list</span>
        </div>
        <div className="bottom-input input-with-icon">
          <input
            color="white"
            type="email"
            placeholder="Enter your email address"
            className="bottom-input-field"
          />
          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </div>
        <div className="social-icons">
          <img src={fb} alt="Facebook" className="social-icon" />
          <img src={yt} alt="YouTube" className="social-icon" />
          <img src={twiter} alt="Twitter" className="social-icon" />
          <img src={instagram} alt="Instagram" className="social-icon" />
        </div>
      </div>
      <div className="copyright">
        <p>
          <span>&copy; 2023 All Rights Reserved.</span>
          <span>Terms of Service</span>
        </p>
      </div>
    </footer>
  );
}

export default App;
