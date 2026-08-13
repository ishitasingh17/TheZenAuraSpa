import BeautyPage from "./BeautyPage";
import WelcomeScreen from "./WelcomeScreen";
import { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import RecommendationPage from "./RecommendationPage";
import BookingDetails from "./BookingDetails";
import AddOns from "./Addons";
import PilgrimFacials from "./PilgrimFacials";
import Summary from "./Summary";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedBeautyCategory, setSelectedBeautyCategory] = useState("");

  const [booking, setBooking] = useState({
    treatment: "",
    duration: "",
    membership: "",

    pricing: [] as {
      duration: string;
      guest: number;
      sapphire: number;
      emeraldRuby: number;
    }[],

    name: "",

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
        setSelectedBeautyCategory={setSelectedBeautyCategory}
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
        booking={booking}
        setBooking={setBooking}
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

  if (screen === "addons") {
    return (
      <AddOns
        setScreen={setScreen}
        booking={booking}
        setBooking={setBooking}
        selectedReason={selectedReason}
        selectedBeautyCategory={selectedBeautyCategory}
      />
    );
  }

  if (screen === "pilgrimFacials") {
    return (
      <PilgrimFacials
        setScreen={setScreen}
        booking={booking}
        setBooking={setBooking}
      />
    );
  }

  if (screen === "summary") {
    return <Summary booking={booking} setScreen={setScreen} />;
  }

  if (screen === "confirmation") {
    return (
      <ConfirmationPage
        setScreen={setScreen}
        booking={booking}
        setBooking={setBooking}
      />
    );
  }
  return null;
}

export default App;
