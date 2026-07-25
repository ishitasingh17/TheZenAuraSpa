import WelcomeScreen from "./WelcomeScreen";
import { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import RecommendationPage from "./RecommendationPage";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [selectedReason, setSelectedReason] = useState("");

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

  if (screen === "recommendations") {
    return <RecommendationPage selectedReason={selectedReason} />;
  }
  return null;
}

export default App;
