//import Message from "./Message";
// import QualityList from "./SpaSubtitle";
import "./WelcomeScreen.css";
import { GiLotus } from "react-icons/gi";

type WelcomeScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

function WelcomeScreen({ setScreen }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-spa">
        <p className="welcome-label">WELCOME TO</p>
        <h1 className="spa-title">Zen Aura Spa</h1>
        <h2 className="spa-subtitle">Bengaluru's Largest Chain of Day Spas</h2>

        <div className="features">
          <div>🌿 Professional Therapists</div>
          <div>🌿 Affordable Packages</div>
          <div>🌿 Same Gender Therapists</div>
        </div>

        <p className="spa-description">
          Step into a world of relaxation and healing. Our expert therapists and
          soothing therapies are designed to rejuvenate your mind, body and
          soul.
        </p>

        <button
          className="start-consultation"
          onClick={() => setScreen("services")}
        >
          Start Consultation
          <span>→</span>
        </button>

        <div className="trust-info">
          <span>⭐ 4.8/5 from 2,000+ happy guests</span>
          <span>📍8 Locations Across Bengaluru</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
