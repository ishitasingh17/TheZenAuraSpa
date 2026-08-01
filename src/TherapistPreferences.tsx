import { useState } from "react";
import "./TherapistPreferences.css";

type TherapistPreferencesProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

function TherapistPreferences({ setScreen }: TherapistPreferencesProps) {
  const [therapist, setTherapist] = useState("");
  const [pressure, setPressure] = useState("");
  return (
    <div className="preferences-container">
      <h1>Your Preferences</h1>

      <p className="preferences-subtitle">
        Help us personalize your spa experience.
      </p>

      <div className="preferences-form">
        <label>Preferred Therapist</label>

        <div className="preferences-radio-group">
          <label className="preferences-radio">
            <input
              type="radio"
              value="Female"
              checked={therapist === "Female"}
              onChange={(e) => setTherapist(e.target.value)}
            />
            Female
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Male"
              checked={therapist === "Male"}
              onChange={(e) => setTherapist(e.target.value)}
            />
            Male
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="No Preference"
              checked={therapist === "No Preference"}
              onChange={(e) => setTherapist(e.target.value)}
            />
            No Preference
          </label>
        </div>

        <label>Pressure Preference</label>

        <div className="preferences-radio-group">
          <label className="preferences-radio">
            <input
              type="radio"
              value="Light"
              checked={pressure === "Light"}
              onChange={(e) => setPressure(e.target.value)}
            />
            Light
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Medium"
              checked={pressure === "Medium"}
              onChange={(e) => setPressure(e.target.value)}
            />
            Medium
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Firm"
              checked={pressure === "Firm"}
              onChange={(e) => setPressure(e.target.value)}
            />
            Firm
          </label>
        </div>

        <button className="continue-button" onClick={() => setScreen("addons")}>
          Continue →
        </button>
      </div>
    </div>
  );
}

export default TherapistPreferences;
