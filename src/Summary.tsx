import "./Summary.css";

type Pricing = {
  duration: string;
  guest: number;
  sapphire: number;
  emeraldRuby: number;
};

type SummaryProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;

  booking: {
    treatment: string;
    duration: string;
    membership: string;
    pricing: Pricing[];
    name: string;
    addOns: string[];
  };
};

function Summary({ booking, setScreen }: SummaryProps) {
  const selectedPricing = booking.pricing.find(
    (item) => item.duration === booking.duration,
  );

  let treatmentPrice = 0;

  if (selectedPricing) {
    if (booking.membership === "Guest") {
      treatmentPrice = selectedPricing.guest;
    } else if (booking.membership === "Sapphire") {
      treatmentPrice = selectedPricing.sapphire;
    } else if (booking.membership === "Emerald/Ruby") {
      treatmentPrice = selectedPricing.emeraldRuby;
    }
  }

  const addOnPrices: Record<string, number> = {
    "Head Massage": 500,
    Steam: 700,
    "Foot Reflexology": 900,
    "Back Scrub": 900,

    // Pilgrim Facials
    "Moisturizing Vit C Facial":
      booking.membership === "Sapphire"
        ? 1920
        : booking.membership === "Emerald/Ruby"
          ? 1200
          : 2400,

    "Brightening 24K Gold Facial":
      booking.membership === "Sapphire"
        ? 2080
        : booking.membership === "Emerald/Ruby"
          ? 1300
          : 2600,

    "Firming French Red Vine Facial":
      booking.membership === "Sapphire"
        ? 2080
        : booking.membership === "Emerald/Ruby"
          ? 1300
          : 2600,
  };

  const addOnsTotal = booking.addOns.reduce(
    (total, addon) => total + (addOnPrices[addon] || 0),
    0,
  );

  const totalPrice = treatmentPrice + addOnsTotal;

  return (
    <div className="summary-container">
      <h1>Booking Summary</h1>

      <p className="summary-subtitle">
        Please review your selections before confirming your experience.
      </p>

      {/* Guest Information */}
      <div className="summary-card">
        <h2>Guest Information</h2>

        <p>
          <strong>Name:</strong> {booking.name}
        </p>

        <p>
          <strong>Membership:</strong> {booking.membership}
        </p>
      </div>

      {/* Selected Treatment */}
      <div className="summary-card">
        <h2>Selected Treatment</h2>

        <p>
          <strong>Treatment:</strong> {booking.treatment}
        </p>

        <p>
          <strong>Duration:</strong> {booking.duration}
        </p>

        <p>
          <strong>Treatment Price:</strong>{" "}
          <span className="treatment-price">
            ₹{treatmentPrice.toLocaleString("en-IN")}
          </span>
        </p>
      </div>

      {/* Add-ons */}

      <div className="summary-card">
        <h2>Add-ons</h2>

        {booking.addOns.length === 0 ? (
          <p>No add-ons selected.</p>
        ) : (
          <ul className="addons-list">
            {booking.addOns.map((addon) => (
              <li key={addon}>
                <span>{addon}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Summary */}
      <div className="summary-card">
        <h2>Price Summary</h2>

        <ul className="price-summary-list">
          <li>
            <span>
              {booking.treatment} ({booking.duration})
            </span>

            <strong>₹{treatmentPrice.toLocaleString("en-IN")}</strong>
          </li>

          {booking.addOns.map((addon) => (
            <li key={addon}>
              <span>{addon}</span>

              <strong>
                ₹{(addOnPrices[addon] || 0).toLocaleString("en-IN")}
              </strong>
            </li>
          ))}
        </ul>

        <hr />

        <div className="estimated-total">
          <span>Estimated Total</span>

          <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
        </div>

        <p className="tax-note">Prices are exclusive of applicable taxes.</p>
      </div>

      {/* Navigation */}
      <div className="summary-buttons">
        <button className="back-button" onClick={() => setScreen("addons")}>
          ← Back
        </button>

        <button
          className="confirm-button"
          onClick={() => setScreen("confirmation")}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Summary;
