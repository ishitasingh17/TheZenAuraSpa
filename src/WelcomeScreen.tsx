import "./WelcomeScreen.css";
import { GiLotus } from "react-icons/gi";

type WelcomeScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

function WelcomeScreen({ setScreen }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      {/* LEFT CONTENT */}
      <div className="welcome-content">
        <div className="logo-section">
          <img
            src="/zen-aura-logo.png"
            alt="The Zen Aura Spa"
            className="zen-aura-logo"
          />

          <h1 className="spa-title">The Zen Aura Spa</h1>

          <p className="logo-tagline">
            RELAX <span>•</span> REJUVENATE <span>•</span> REBALANCE
          </p>
        </div>

        <div className="welcome-divider"></div>

        <p className="welcome-label">WELCOME TO</p>

        <h2 className="hero-title">
          Your Personalized
          <br />
          Spa Experience
        </h2>

        <p className="spa-description">
          Discover treatments carefully tailored to your wellness goals. Our
          short consultation helps us recommend the most suitable spa experience
          for you.
        </p>

        <div className="features">
          <div className="feature-item">
            <GiLotus />
            <span>Expert Therapists</span>
          </div>

          <div className="feature-item">
            <GiLotus />
            <span>Personalized Treatments</span>
          </div>

          <div className="feature-item">
            <GiLotus />
            <span>Premium Experience</span>
          </div>
        </div>

        <button
          className="start-consultation"
          onClick={() => setScreen("services")}
        >
          Begin Your Consultation
          <span>→</span>
        </button>

        <p className="consultation-note">Takes approximately 2–3 minutes</p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="welcome-image">
        <img src="/spa-bg.jpeg" alt="Zen Aura Spa" />

        <div className="image-overlay"></div>

        <div className="image-caption">
          <span>YOUR WELLNESS JOURNEY</span>
          <p>Begins with you.</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
