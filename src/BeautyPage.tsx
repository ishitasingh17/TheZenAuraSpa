import { useState } from "react";

type BeautyPageProps = {
  setScreen: (screen: string) => void;
  setSelectedBeautyCategory: (category: string) => void;
};

function BeautyPage({ setScreen, setSelectedBeautyCategory }: BeautyPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="recommendation-page">
      <h1>Choose a Beauty Treatment</h1>

      <div className="treatment-list">
        <div
          className={`treatment-card ${
            selectedCategory === "Facials" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("Facials")}
        >
          <h3>Facials</h3>
        </div>

        <div
          className={`treatment-card ${
            selectedCategory === "Body Scrubs & Wraps" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("Body Scrubs & Wraps")}
        >
          <h3>Body Scrubs & Wraps</h3>
        </div>
      </div>

      <button
        className="continue-button"
        disabled={!selectedCategory}
        onClick={() => {
          setSelectedBeautyCategory(selectedCategory);
          setScreen("recommendations");
        }}
      >
        Continue →
      </button>
    </div>
  );
}

export default BeautyPage;
