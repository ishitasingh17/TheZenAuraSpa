type RecommendationPageProps = {
  selectedReason: string;
};

function RecommendationPage({ selectedReason }: RecommendationPageProps) {
  const recommendations = {
    "Pain Relief": [
      {
        name: "Deep Tissue Massage",
        duration: "60 min",
        price: "$95",
        description: "Targets muscle tension and chronic pain.",
      },
      {
        name: "Sports Recovery Massage",
        duration: "75 min",
        price: "$110",
        description:
          "Designed for active individuals and post-workout recovery.",
      },
      {
        name: "Swedish Massage",
        duration: "60 min",
        price: "$85",
        description: "A gentle massage that promotes relaxation.",
      },
    ],

    Relaxation: [
      {
        name: "Aromatherapy Massage",
        duration: "60 min",
        price: "$90",
        description: "Essential oils to calm body and mind.",
      },
      {
        name: "Balinese Massage",
        duration: "90 min",
        price: "$120",
        description: "Traditional massage with deep relaxation.",
      },
      {
        name: "Swedish Massage",
        duration: "60 min",
        price: "$85",
        description: "Classic full-body massage.",
      },
    ],

    Stress: ["Aromatherapy Massage", "Hot Stone Massage", "Swedish Massage"],

    "Long Working Hours": [
      "Neck & Shoulder Massage",
      "Deep Tissue Massage",
      "Reflexology",
    ],

    "Gym Recovery": [
      "Sports Recovery Massage",
      "Deep Tissue Massage",
      "Stretch Therapy",
    ],

    "Travel Fatigue": [
      "Foot Reflexology",
      "Swedish Massage",
      "Hydration Facial",
    ],

    "Poor Sleep": [
      "Aromatherapy Massage",
      "Hot Stone Massage",
      "Scalp Massage",
    ],

    "Quality Time Together": [
      "Couples Massage",
      "Private Spa Suite",
      "Aromatherapy Massage",
    ],

    Beauty: ["Luxury Facial", "Body Polish", "Body Wrap"],

    "Gift Experience": ["Spa Package", "Signature Massage", "Luxury Facial"],
  };

  const treatements =
    recommendations[selectedReason as keyof typeof recommendations] || [];

  return (
    <div>
      <h1>Recommendation Page</h1>
      <h2> Recommended for: {selectedReason}</h2>

      <ul>
        {treatements.map((treatement) => (
          <li key={treatement}>{treatement}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationPage;
