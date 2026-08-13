import "./AddOns.css";

type AddOnsProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;

  selectedReason: string;
  selectedBeautyCategory: string;

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

function AddOns({
  setScreen,
  booking,
  setBooking,
  selectedReason,
  selectedBeautyCategory,
}: AddOnsProps) {
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

  const isFacialTreatment =
    selectedReason === "Beauty" && selectedBeautyCategory === "Facials";

  const toggleAddOn = (name: string) => {
    if (booking.addOns.includes(name)) {
      setBooking({
        ...booking,
        addOns: booking.addOns.filter((item) => item !== name),
      });
    } else {
      setBooking({
        ...booking,
        addOns: [...booking.addOns, name],
      });
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
                checked={booking.addOns.includes(addon.name)}
                onChange={() => toggleAddOn(addon.name)}
              />

              <div className="addon-content">
                <h3>{addon.name}</h3>

                <p>{addon.description}</p>

                <p className="addon-duration">
                  <strong>Duration:</strong> {addon.duration}
                </p>

                <strong className="addon-price">+₹{addon.price}</strong>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button
          className="addons-back-button"
          onClick={() => setScreen("booking")}
        >
          ← Back
        </button>

        <button
          className="addons-continue-button"
          onClick={() =>
            setScreen(isFacialTreatment ? "summary" : "pilgrimFacials")
          }
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default AddOns;
