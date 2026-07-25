import "./ServiceSelection.css";
import {
  FaSpa,
  FaLaptop,
  FaDumbbell,
  FaPlane,
  FaMoon,
  FaGift,
  FaHeart,
} from "react-icons/fa";

import { GiMeditation, GiBodyBalance } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

type ServiceSelectionProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  selectedReason: string;
  setSelectedReason: React.Dispatch<React.SetStateAction<string>>;
};

function ServiceSelection({
  setScreen,
  selectedReason,
  setSelectedReason,
}: ServiceSelectionProps) {
  const reasons = [
    { icon: <GiMeditation />, name: "Relaxation" },
    { icon: <IoBody />, name: "Pain Relief" },
    { icon: <FaBrain />, name: "Stress" },
    { icon: <FaLaptop />, name: "Long Working Hours" },
    { icon: <FaDumbbell />, name: "Gym Recovery" },
    { icon: <FaPlane />, name: "Travel Fatigue" },
    { icon: <FaMoon />, name: "Poor Sleep" },
    { icon: <FaHeart />, name: "Quality Time Together" },
    { icon: <BsStars />, name: "Beauty" },
    { icon: <FaGift />, name: "Gift Experience" },
  ];

  return (
    <div className="service-page">
      <h2 className="service-title">What brings you here today?</h2>

      <p className="service-subtitle">
        Choose one or more reasons so we can recommend the perfect treatement.
      </p>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <button
            key={reason.name}
            className={
              selectedReason === reason.name
                ? "reason-card selected"
                : "reason-card"
            }
            onClick={() => setSelectedReason(reason.name)}
          >
            <div className="reason-icon">{reason.icon}</div>
            <p className="reasons-name">{reason.name}</p>
          </button>
        ))}
      </div>
      <button
        className="continue-button"
        disabled={!selectedReason}
        onClick={() => setScreen("recommendations")}
      >
        Continue →
      </button>
    </div>
  );
}

export default ServiceSelection;
