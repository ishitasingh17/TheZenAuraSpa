import "./BookingDetails.css";

type BookingDetailsProps = {
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

function BookingDetails({
  setScreen,
  booking,
  setBooking,
}: BookingDetailsProps) {
  return (
    <div className="booking-container">
      <h1>Let's Reserve Your Experience</h1>

      <p className="booking-subtitle">
        Please enter your details so our reception team can prepare your
        booking.
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

        <label>Phone Number *</label>
        <input
          className="booking-input"
          type="tel"
          placeholder="+91 xx xxx xxxx"
          value={booking.phone}
          onChange={(e) =>
            setBooking({
              ...booking,
              phone: e.target.value,
            })
          }
        />

        <label>Age</label>
        <input
          className="booking-input"
          type="number"
          placeholder="Enter your age"
          value={booking.age}
          onChange={(e) =>
            setBooking({
              ...booking,
              age: e.target.value,
            })
          }
        />

        <label>Gender</label>

        <div className="booking-radio-group">
          <label className="booking-radio">
            <input
              type="radio"
              value="Male"
              checked={booking.gender === "Male"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  gender: e.target.value,
                })
              }
            />
            Male
          </label>

          <label className="booking-radio">
            <input
              type="radio"
              value="Female"
              checked={booking.gender === "Female"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  gender: e.target.value,
                })
              }
            />
            Female
          </label>

          <label className="booking-radio">
            <input
              type="radio"
              value="Prefer not to say"
              checked={booking.gender === "Prefer not to say"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  gender: e.target.value,
                })
              }
            />
            Prefer not to say
          </label>
        </div>

        <label>First Visit?</label>

        <div className="booking-radio-group">
          <label className="booking-radio">
            <input
              type="radio"
              value="Yes"
              checked={booking.firstVisit === "Yes"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  firstVisit: e.target.value,
                })
              }
            />
            Yes
          </label>

          <label className="booking-radio">
            <input
              type="radio"
              value="No"
              checked={booking.firstVisit === "No"}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  firstVisit: e.target.value,
                })
              }
            />
            No
          </label>
        </div>

        <label>Birthday (Optional)</label>
        <input
          className="booking-input"
          type="date"
          value={booking.birthday}
          onChange={(e) =>
            setBooking({
              ...booking,
              birthday: e.target.value,
            })
          }
        />

        <label>Occupation (Optional)</label>
        <input
          className="booking-input"
          type="text"
          placeholder="Occupation"
          value={booking.occupation}
          onChange={(e) =>
            setBooking({
              ...booking,
              occupation: e.target.value,
            })
          }
        />

        <button
          className="continue-button"
          onClick={() => setScreen("preferences")}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default BookingDetails;
