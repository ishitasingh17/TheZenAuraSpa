import "./TherapistPreferences.css";

type TherapistPreferencesProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;

  booking: {
    treatment: string;
    duration: string;
    membership: string;
    name: string;
    phone: string;
    age: string;
    gender: string;
    firstVisit: string;
    birthday: string;
    occupation: string;
    therapist: string;
    pressure: string;
    addOns: string[];
  };

  setBooking: React.Dispatch<
    React.SetStateAction<{
      treatment: string;
      duration: string;
      membership: string;
      name: string;
      phone: string;
      age: string;
      gender: string;
      firstVisit: string;
      birthday: string;
      occupation: string;
      therapist: string;
      pressure: string;
      addOns: string[];
    }>
  >;
};

function TherapistPreferences({
  setScreen,
  booking,
  setBooking,
}: TherapistPreferencesProps) {
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
              checked={booking.therapist === "Female"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  therapist: e.target.value,
                })
              }
            />
            Female
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Male"
              checked={booking.therapist === "Male"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  therapist: e.target.value,
                })
              }
            />
            Male
          </label>
        </div>

        <label>Pressure Preference</label>

        <div className="preferences-radio-group">
          <label className="preferences-radio">
            <input
              type="radio"
              value="Light"
              checked={booking.pressure === "Light"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  pressure: e.target.value,
                })
              }
            />
            Light
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Medium"
              checked={booking.pressure === "Medium"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  pressure: e.target.value,
                })
              }
            />
            Medium
          </label>

          <label className="preferences-radio">
            <input
              type="radio"
              value="Firm"
              checked={booking.pressure === "Firm"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  pressure: e.target.value,
                })
              }
            />
            Firm
          </label>
        </div>

        <div className="button-row">
          <button
            className="preferences-back-button"
            onClick={() => setScreen("booking")}
          >
            ← Back
          </button>

          <button
            className="preferences-continue-button"
            onClick={() => setScreen("addons")}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default TherapistPreferences;
