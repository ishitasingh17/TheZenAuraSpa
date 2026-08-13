import "./ConfirmationPage.css";

type ConfirmationPageProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;

  booking: {
    treatment: string;
    duration: string;
    membership: string;
    pricing: {
      duration: string;
      guest: number;
      sapphire: number;
      emeraldRuby: number;
    }[];
    name: string;
    addOns: string[];
  };

  setBooking: React.Dispatch<
    React.SetStateAction<{
      treatment: string;
      duration: string;
      membership: string;
      pricing: {
        duration: string;
        guest: number;
        sapphire: number;
        emeraldRuby: number;
      }[];
      name: string;
      addOns: string[];
    }>
  >;
};

function ConfirmationPage({
  setScreen,
  booking,
  setBooking,
}: ConfirmationPageProps) {
  const regularAddOnPrices: Record<string, number> = {
    "Head Massage": 500,
    Steam: 700,
    "Foot Reflexology": 900,
    "Back Scrub": 900,
  };

  const pilgrimFacialPrices: Record<
    string,
    {
      guest: number;
      sapphire: number;
      emeraldRuby: number;
    }
  > = {
    "Moisturizing Vit C Facial": {
      guest: 2400,
      sapphire: 1920,
      emeraldRuby: 1200,
    },

    "Brightening 24K Gold Facial": {
      guest: 2600,
      sapphire: 2080,
      emeraldRuby: 1300,
    },

    "Firming French Red Vine Facial": {
      guest: 2600,
      sapphire: 2080,
      emeraldRuby: 1300,
    },
  };

  const selectedPricing = booking.pricing.find(
    (item) => item.duration === booking.duration,
  );

  let treatmentPrice = 0;

  if (selectedPricing) {
    if (booking.membership === "Sapphire") {
      treatmentPrice = selectedPricing.sapphire;
    } else if (booking.membership === "Emerald/Ruby") {
      treatmentPrice = selectedPricing.emeraldRuby;
    } else {
      treatmentPrice = selectedPricing.guest;
    }
  }

  const getAddOnPrice = (addon: string) => {
    if (regularAddOnPrices[addon]) {
      return regularAddOnPrices[addon];
    }

    const facial = pilgrimFacialPrices[addon];

    if (!facial) {
      return 0;
    }

    if (booking.membership === "Sapphire") {
      return facial.sapphire;
    }

    if (booking.membership === "Emerald/Ruby") {
      return facial.emeraldRuby;
    }

    return facial.guest;
  };

  const addOnsTotal = booking.addOns.reduce(
    (total, addon) => total + getAddOnPrice(addon),
    0,
  );

  const totalPrice = treatmentPrice + addOnsTotal;

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>

        <h1>Your Consultation is Done!</h1>

        <p className="confirmation-text">
          Thank you for choosing <strong>The Zen Aura Spa.</strong>
        </p>

        <p className="reception-message">
          Please show this screen to our reception team.
        </p>

        {/* Guest Information */}
        <div className="confirmation-section">
          <h2>Guest Information</h2>

          <p>
            <strong>Name:</strong> {booking.name}
          </p>

          <p>
            <strong>Membership:</strong> {booking.membership || "Guest"}
          </p>
        </div>

        {/* Treatment */}
        <div className="confirmation-section">
          <h2>Your Selected Experience</h2>

          <div className="confirmation-treatment">
            <div>
              <strong>{booking.treatment}</strong>
              <span>{booking.duration}</span>
            </div>

            <strong className="confirmation-price">₹{treatmentPrice}</strong>
          </div>
        </div>

        {/* Add-ons */}
        <div className="confirmation-section">
          <h2>Add-ons</h2>

          {booking.addOns.length === 0 ? (
            <p>No add-ons selected.</p>
          ) : (
            <div className="confirmation-addons">
              {booking.addOns.map((addon) => (
                <div className="confirmation-addon" key={addon}>
                  <span>{addon}</span>
                  <strong>₹{getAddOnPrice(addon)}</strong>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total */}
        <div className="confirmation-total">
          <span>Estimated Total</span>
          <strong>₹{totalPrice}</strong>
        </div>

        <p className="reception-instruction">
          Please keep this screen visible while you hand the tablet to the
          reception team.
        </p>

        <button
          className="new-consultation-button"
          onClick={() => {
            setBooking({
              treatment: "",
              duration: "",
              membership: "",
              pricing: [],
              name: "",
              addOns: [],
            });

            setScreen("welcome");
          }}
        >
          Start New Consultation
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
