import { useState } from "react";
import "./PilgrimFacials.css";

type Pricing = {
  duration: string;
  guest: number;
  sapphire: number;
  emeraldRuby: number;
};

type Facial = {
  name: string;
  image: string;
  description: string;
  pricing: Pricing[];
};

type PilgrimFacialsProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;

  booking: {
    treatment: string;
    duration: string;
    membership: string;
    pricing: Pricing[];
    name: string;
    addOns: string[];
  };

  setBooking: React.Dispatch<
    React.SetStateAction<{
      treatment: string;
      duration: string;
      membership: string;
      pricing: Pricing[];
      name: string;
      addOns: string[];
    }>
  >;
};

function PilgrimFacials({
  setScreen,
  booking,
  setBooking,
}: PilgrimFacialsProps) {
  const [wantsFacial, setWantsFacial] = useState<boolean | null>(null);
  const [selectedFacial, setSelectedFacial] = useState("");

  const pilgrimFacials: Facial[] = [
    {
      name: "Moisturizing Vit C Facial",
      image: "/vitamin-c.jpeg",
      description:
        "The facial works well for all skin types and contains the goodness of Australian Kakadu Plum, Alpha Arbutin & Kojic Acid. It gently exfoliates, hydrates and also provides an even skin tone.",
      pricing: [
        {
          duration: "60 min",
          guest: 2400,
          sapphire: 1920,
          emeraldRuby: 1200,
        },
      ],
    },

    {
      name: "Brightening 24K Gold Facial",
      image: "/gold-facial.jpeg",
      description:
        "Discover a radiant glow with this 24K Gold facial which brightens the skin’s natural glow. Korean White Lotus, Glutathione & Peptides leave your skin with improved texture and a radiant glow. The facial is suitable for all skin types.",
      pricing: [
        {
          duration: "90 min",
          guest: 2600,
          sapphire: 2080,
          emeraldRuby: 1300,
        },
      ],
    },

    {
      name: "Firming French Red Vine Facial",
      image: "/red-vine.jpg",
      description:
        "Discover youthful skin with this facial containing Resveratrol known for skin firming. Suitable for all skin types, this facial is highly recommended for anyone seeking age-defying benefits of French Red Vine.",
      pricing: [
        {
          duration: "90 min",
          guest: 2600,
          sapphire: 2080,
          emeraldRuby: 1300,
        },
      ],
    },
  ];

  const handleFacialSelection = (facialName: string) => {
    setSelectedFacial(facialName);

    // Remove any previously selected Pilgrim facial
    const facialNames = pilgrimFacials.map((facial) => facial.name);

    const otherAddOns = booking.addOns.filter(
      (addOn) => !facialNames.includes(addOn),
    );

    setBooking({
      ...booking,
      addOns: [...otherAddOns, facialName],
    });
  };

  const handleNoFacial = () => {
    setWantsFacial(false);
    setSelectedFacial("");

    const facialNames = pilgrimFacials.map((facial) => facial.name);

    setBooking({
      ...booking,
      addOns: booking.addOns.filter((addOn) => !facialNames.includes(addOn)),
    });
  };

  return (
    <div className="pilgrim-container">
      <h1>Enhance Your Experience</h1>

      <p className="pilgrim-intro">
        Did you know we offer professional facials from Pilgrim Professional?
      </p>

      <img
        src="/pilgrim-facials.png"
        alt="Pilgrim Professional"
        className="pilgrim-logo"
      />

      <p className="membership-price-note">
        Your membership price is highlighted below.
      </p>

      <p className="tax-note">Prices are exclusive of tax.</p>

      <div className="pilgrim-divider"></div>

      <h2 className="facial-question">
        Would you like to add a facial to your experience?
      </h2>

      <div className="facial-choice">
        <button
          className={`facial-choice-button ${
            wantsFacial === true ? "selected" : ""
          }`}
          onClick={() => setWantsFacial(true)}
        >
          Yes, I'd like a facial
        </button>

        <button
          className={`facial-choice-button ${
            wantsFacial === false ? "selected" : ""
          }`}
          onClick={handleNoFacial}
        >
          No, thank you
        </button>
      </div>

      {wantsFacial === true && (
        <div className="facial-options">
          <h2>Choose Your Facial</h2>

          {pilgrimFacials.map((facial) => {
            const pricing = facial.pricing[0];

            return (
              <label
                className={`facial-card ${
                  selectedFacial === facial.name ? "selected" : ""
                }`}
                key={facial.name}
              >
                <input
                  type="radio"
                  name="pilgrim-facial"
                  checked={selectedFacial === facial.name}
                  onChange={() => handleFacialSelection(facial.name)}
                />

                <img
                  src={facial.image}
                  alt={facial.name}
                  className="facial-card-image"
                />

                <div className="facial-card-content">
                  <h3>{facial.name}</h3>

                  <p>{facial.description}</p>

                  <p>
                    <strong>Duration:</strong> {pricing.duration}
                  </p>

                  <div className="facial-pricing">
                    <div
                      className={`facial-price-row ${
                        booking.membership === "Guest"
                          ? "current-membership"
                          : ""
                      }`}
                    >
                      <span>Guest</span>
                      <strong>₹{pricing.guest.toLocaleString("en-IN")}</strong>
                    </div>

                    <div
                      className={`facial-price-row ${
                        booking.membership === "Sapphire"
                          ? "current-membership"
                          : ""
                      }`}
                    >
                      <span>Sapphire Member</span>
                      <strong>
                        ₹{pricing.sapphire.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <div
                      className={`facial-price-row ${
                        booking.membership === "Emerald/Ruby"
                          ? "current-membership"
                          : ""
                      }`}
                    >
                      <span>Emerald/Ruby Member</span>
                      <strong>
                        ₹{pricing.emeraldRuby.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      )}

      <div className="pilgrim-button-row">
        <button
          className="pilgrim-back-button"
          onClick={() => setScreen("addons")}
        >
          ← Back
        </button>

        <button
          className="pilgrim-continue-button"
          disabled={wantsFacial === true && !selectedFacial}
          onClick={() => setScreen("summary")}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default PilgrimFacials;
