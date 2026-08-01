import BeautyPage from "./BeautyPage";
import WelcomeScreen from "./WelcomeScreen";
import { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import RecommendationPage from "./RecommendationPage";
import BookingDetails from "./BookingDetails";
import TherapistPreferences from "./TherapistPreferences";
import AddOns from "./Addons";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedBeautyCategory, setSelectedBeautyCategory] = useState("");

  const [booking, setBooking] = useState({
    treatment: "",
    duration: "",
    membership: "",

    name: "",
    phone: "",
    age: "",
    gender: "",
    firstVisit: "",
    birthday: "",
    occupation: "",

    therapist: "",
    pressure: "",

    addOns: [] as string[],
  });

  if (screen === "welcome") {
    return <WelcomeScreen setScreen={setScreen} />;
  }

  if (screen === "services") {
    return (
      <ServiceSelection
        setScreen={setScreen}
        selectedReason={selectedReason}
        setSelectedReason={setSelectedReason}
      />
    );
  }

  if (screen === "beauty") {
    return (
      <BeautyPage
        setScreen={setScreen}
        setSelectedBeautyCategory={setSelectedBeautyCategory}
      />
    );
  }

  if (screen === "recommendations") {
    return (
      <RecommendationPage
        selectedReason={selectedReason}
        selectedBeautyCategory={selectedBeautyCategory}
        setScreen={setScreen}
      />
    );
  }

  if (screen === "booking") {
    return (
      <BookingDetails
        setScreen={setScreen}
        booking={booking}
        setBooking={setBooking}
      />
    );
  }

  if (screen === "preferences") {
    return (
      <TherapistPreferences
        setScreen={setScreen}
        booking={booking}
        setBooking={setBooking}
      />
    );
  }

  if (screen === "addons") {
    return <AddOns setScreen={setScreen} />;
  }

  return null;
}

export default App;
