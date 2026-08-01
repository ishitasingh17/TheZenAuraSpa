import { useState } from "react";
import "./AddOns.css";

type AddOnsProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

function AddOns({ setScreen }: AddOnsProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    {
      name: "Head Massage",
      duration: "10 min",
      price: 500,
      description:
        "A relaxing scalp massage designed to reduce stress and improve well-being.",
    },
    {
      name: "Steam",
      duration: "15 min",
      price: 700,
      description:
        "Enjoy gentle steam therapy to relax your body and refresh your senses.",
    },
    {
      name: "Foot Reflexology",
      duration: "10 min",
      price: 900,
      description:
        "Relax tired feet and restore balance with a soothing reflexology treatment.",
    },

    {
      name: "Back Scrub",
      duration: "15 min",
      price: 900,
      description:
        "Revitalize your skin with a deep cleansing scrub that restores a healthy glow.",
    },
  ];

  const toggleAddOn = (name: string) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  return (
    <div className="addons-container">
      <h1>Enhance Your Experience</h1>

      <p className="addons-subtitle">
        Select any optional add-ons to personalize your spa experience.
      </p>

      <div className="addons-list">
        {addOns.map((addon) => (
          <div className="addon-card" key={addon.name}>
            <label className="addon-label">
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addon.name)}
                onChange={() => toggleAddOn(addon.name)}
              />

              <div className="addon-content">
                <h3>{addon.name}</h3>

                <p>{addon.description}</p>

                {addon.duration && (
                  <p className="addon-duration">
                    <strong>Duration:</strong> {addon.duration}
                  </p>
                )}

                <strong className="addon-price">+₹{addon.price}</strong>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button className="skip-button" onClick={() => setScreen("summary")}>
          Skip
        </button>

        <button
          className="continue-button"
          onClick={() => setScreen("summary")}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default AddOns;
