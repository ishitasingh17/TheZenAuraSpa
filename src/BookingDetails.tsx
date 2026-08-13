import "./BookingDetails.css";

type BookingDetailsProps = {
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

function BookingDetails({
  setScreen,
  booking,
  setBooking,
}: BookingDetailsProps) {
  return (
    <div className="booking-container">
      <h1>Let's Reserve Your Experience</h1>

      <p className="booking-subtitle">
        Tell us a little about yourself so we can personalize your spa
        experience.
      </p>

      <div className="booking-form">
        <label>Full Name *</label>

        <input
          className="booking-input"
          type="text"
          placeholder="Enter your full name"
          value={booking.name}
          onChange={(e) =>
            setBooking({
              ...booking,
              name: e.target.value,
            })
          }
        />

        <label>Membership</label>

        <div className="booking-radio-group">
          <label className="booking-radio">
            <input
              type="radio"
              value="Guest"
              checked={booking.membership === "Guest"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  membership: e.target.value,
                })
              }
            />
            Guest
          </label>

          <label className="booking-radio">
            <input
              type="radio"
              value="Sapphire"
              checked={booking.membership === "Sapphire"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  membership: e.target.value,
                })
              }
            />
            Sapphire Member
          </label>

          <label className="booking-radio">
            <input
              type="radio"
              value="Emerald/Ruby"
              checked={booking.membership === "Emerald/Ruby"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  membership: e.target.value,
                })
              }
            />
            Emerald / Ruby Member
          </label>
        </div>

        <div className="button-row">
          <button
            className="booking-back-button"
            onClick={() => setScreen("recommendations")}
          >
            ← Back
          </button>

          <button
            className="booking-continue-button"
            onClick={() => setScreen("addons")}
            disabled={!booking.name || !booking.membership}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
