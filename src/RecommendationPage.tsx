import "./RecommendationPage.css";
import deepTissueImage from "./assets/images/deep-tissue.jpg";
import sportsRecovery from "./assets/images/sports-recovery.jpeg";
import swedishMassage from "./assets/images/swedish-therapy.jpg";
import backPain from "./assets/images/back-pain.jpeg";
import hotPotli from "./assets/images/hot-potli.jpeg";
import hotStone from "./assets/images/hot-stone.jpeg";
import aromaTherapy from "./assets/images/aroma-therapy.jpg";
import balineseMassage from "./assets/images/balinese-massage.jpeg";
import rejuvenateAroma from "./assets/images/rej-aroma.jpg";
import thaiMassage from "./assets/images/thai-massage.png";
import footReflex from "./assets/images/foot-reflex.jpeg";
import shoulderMassage from "./assets/images/shoulder-massage.jpg";
import shirodhara from "./assets/images/shirodhara.jpg";
import vitaminC from "./assets/images/vitamin-c.jpeg";
import goldFacial from "./assets/images/gold-facial.jpeg";
import redVine from "./assets/images/red-vine.jpg";
import coffeeScrub from "./assets/images/coffee-scrub.jpg";
import charcoalScrub from "./assets/images/charcoal-scrub.jpg";
import charcoalWrap from "./assets/images/charcoal-wrap.jpg";
import ubtanScrub from "./assets/images/ubtan-scrub.png";
import ubtanWrap from "./assets/images/ubtan-wrap.jpeg";
import seaweedScrub from "./assets/images/seaweed-scrub.jpg";
import seaweedWrap from "./assets/images/seaweed-wrap.png";
import bodyWrap from "./assets/images/body-wrap.jpg";
import coupleSpa from "./assets/images/couple-time.jpeg";
import ladiesRetreat from "./assets/images/ladies-retreat.jpeg";
import menSpa from "./assets/images/men-spa.jpg";
import cocoaButter from "./assets/images/ubtan-wrap.jpeg";
import eucalypMassage from "./assets/images/swedish-therapy.jpg";
import moroccanScrub from "./assets/images/body-wrap.jpg";
import oilTherapy from "./assets/images/oil-massage.jpeg";
import velvetMassage from "./assets/images/velvet-massage.jpeg";

type RecommendationPageProps = {
  selectedReason: string;
  selectedBeautyCategory: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

function RecommendationPage({
  selectedReason,
  selectedBeautyCategory,
  setScreen,
}: RecommendationPageProps) {
  const recommendations = {
    "Pain Relief": [
      {
        name: "Deep Tissue Massage with Rosemary and Marjoram",
        image: deepTissueImage,
        description: "Targets muscle tension and chronic pain.",

        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3600,
            sapphire: 2880,
            emeraldRuby: 1800,
          },
        ],
      },

      {
        name: "Sports Recovery Massage",
        image: sportsRecovery,
        description:
          "Designed for active individuals and post-workout recovery.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3600,
            sapphire: 2880,
            emeraldRuby: 1800,
          },
        ],
      },
      {
        name: "Swedish Massage with Wintergreen and Eucalyptus",
        image: swedishMassage,
        description: "A gentle massage that promotes relaxation.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3600,
            sapphire: 2880,
            emeraldRuby: 1800,
          },
        ],
      },

      {
        name: "Back Massage With Wintergreen & Eucalyptus",
        image: backPain,
        description: "A gentle massage that promotes relaxation.",
        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },

      {
        name: "Massage with Hot Potli",
        image: hotPotli,
        description:
          "Performed using few steps of Swedish technique and an Ayurvedic Potli, this massage is very helpful in reducing back pain or pain in the calves.",
        pricing: [
          {
            duration: "45 min",
            guest: 2000,
            sapphire: 1600,
            emeraldRuby: 1000,
          },
        ],
      },

      {
        name: "Hot Stone Massage With Wintergreen & Eucalyptus",
        image: hotStone,
        description:
          "A hot stone massage uses smooth, heated stones and oils placed on your body's acupressure points to perform relaxing massage strokes.",
        pricing: [
          {
            duration: "60 min",
            guest: 3000,
            sapphire: 2400,
            emeraldRuby: 1500,
          },
          {
            duration: "90 min",
            guest: 4000,
            sapphire: 3200,
            emeraldRuby: 2000,
          },
        ],
      },
    ],

    Relaxation: [
      {
        name: "Aromatherapy Massage With Lavender, Ylang Ylang & Mandarin​",
        image: aromaTherapy,
        description:
          "This calming massage uses slow, moderate pressure and a blend of Lavender, Ylang-Ylang, and Mandarin oils. The oils relax your mind through scent and skin absorption, helping to ease physical tension, anxiety, and mental stress.",

        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
      },

      {
        name: "Balinese Massage With Rosemary and Marjoram",
        image: balineseMassage,
        description:
          "This massage boosts blood, oxygen, and energy flow using gentle stretches, aromatherapy, acupressure, and reflexology to promote deep relaxation. It features a rosemary and marjoram oil blend that reduces pain and inflammation",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
      },

      {
        name: "Rejuvenating Aromatherapy Massage With Cinnamon & Basil",
        image: rejuvenateAroma,
        description:
          "This massage uses slow, relaxing strokes and a cinnamon-basil oil blend. It relaxes your body while the scents refresh your mind and boost blood circulation.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
      },

      {
        name: "Thai Massage",
        image: thaiMassage,
        description:
          "A dry, oil-free massage combines yoga and acupressure. Therapists use hands and feet to press muscles along the body's energy lines, balancing energy to make you feel relaxed and energetic.",

        pricing: [
          {
            duration: "60 min",
            guest: 2200,
            sapphire: 1760,
            emeraldRuby: 1100,
          },
          {
            duration: "90 min",
            guest: 3400,
            sapphire: 2720,
            emeraldRuby: 1700,
          },
        ],
      },

      {
        name: "Foot Reflexology",
        image: footReflex,
        description:
          "This treatment uses sesame oil for foot acupressure and calf massage to heal sore muscles and remove tiredness.",
        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },

      {
        name: "Head and Shoulder Massage",
        image: shoulderMassage,
        description:
          "This Ayurvedic Indian head massage uses herbal oils like Salparni and Myrobalan to relieve neck, shoulder, and head tension while boosting brain blood flow",
        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },

      {
        name: "Shirodhara",
        image: shirodhara,
        description:
          "Shirodhara is a classic Ayurvedic therapy where warm herbal oil is poured smoothly onto the forehead. The oil is then massaged into the scalp and hair to deeply relax your mind.",
        pricing: [
          {
            duration: "60 min",
            guest: 2200,
            sapphire: 1760,
            emeraldRuby: 1100,
          },
        ],
      },
    ],

    Stress: [
      {
        name: " Calming Aromatherapy Massage With Lavender, Ylang Ylang & Mandarin",
        image: aromaTherapy,
        description:
          "This relaxing massage uses slow, gentle pressure and a calming blend of Lavender, Ylang-Ylang, and Mandarin oils to soothe your body, ease anxiety, and relieve mental stress.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
      },
      {
        name: "Hot Stone Massage with Wintergreen & Eucalyptus",
        image: hotStone,
        description:
          "The massage is done using smooth heated stones & oils. The stones are heated & placed on multiple acupressure points on the body & are used for performing the massage strokes. The massage promotes a deeply relaxed state of body and mind. The oil used is a pain relieving oil blend of wintergreen and eucalyptus.",
        pricing: [
          {
            duration: "60 min",
            guest: 3000,
            sapphire: 2400,
            emeraldRuby: 1500,
          },
          {
            duration: "90 min",
            guest: 4000,
            sapphire: 3200,
            emeraldRuby: 2000,
          },
        ],
      },
      {
        name: "Swedish Massage with Wintergreen & Eucalyptus",
        image: swedishMassage,
        description:
          "Performed using Swedish techniques using a pain relieving oil blend the massage is best to give you relief from muscular pain. The oil blend contains Wintergreen and Eucalyptus which are known for their topical pain relief properties.",
        pricing: [
          {
            duration: "60 min",
            guest: 2200,
            sapphire: 1760,
            emeraldRuby: 1100,
          },
          {
            duration: "90 min",
            guest: 3400,
            sapphire: 2720,
            emeraldRuby: 1700,
          },
        ],
      },
    ],

    "Long Working Hours": [
      {
        name: "Head & Shoulder Massage",
        image: shoulderMassage,
        description:
          "Relieves tension and stiffness in the neck and shoulders caused by long working hours.",
        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },
      {
        name: "Deep Tissue Massage",
        image: deepTissueImage,
        description:
          "Targets deep muscle tension and helps relieve chronic pain.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3600,
            sapphire: 2880,
            emeraldRuby: 1800,
          },
        ],
      },
      {
        name: "Foot Reflexology",
        image: footReflex,
        description:
          "Stimulates pressure points to improve circulation and reduce stress.",
        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },
    ],

    "Travel Fatigue": [
      {
        name: "Foot Reflexology",
        image: footReflex,
        description:
          "Relieves tired feet, improves circulation, and refreshes the body after travel.",

        pricing: [
          {
            duration: "30 min",
            guest: 1400,
            sapphire: 1120,
            emeraldRuby: 700,
          },
        ],
      },
      {
        name: "Swedish Massage",
        image: swedishMassage,
        description:
          "A gentle full-body massage that eases muscle tension and promotes relaxation.",

        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3600,
            sapphire: 2880,
            emeraldRuby: 1800,
          },
        ],
      },
    ],

    "Poor Sleep": [
      {
        name: "Calming Aromatherapy Massage With Lavender, Ylang Ylang & Mandarin​",
        image: aromaTherapy,
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
        description:
          "Uses calming essential oils to reduce stress and encourage restful sleep.",
      },
      {
        name: "Rejuvenating Aromatherapy Massage With Cinnamon & Basil",
        image: rejuvenateAroma,
        description:
          "Warm stones relax tense muscles and create a deeply calming experience.",

        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
          {
            duration: "90 min",
            guest: 3200,
            sapphire: 2560,
            emeraldRuby: 1600,
          },
        ],
      },
      {
        name: "Hot Stone Massage with Wintergreen & Eucalyptus",
        image: hotStone,
        description:
          "Relieves stress and promotes relaxation to help improve sleep quality.",

        pricing: [
          {
            duration: "60 min",
            guest: 3000,
            sapphire: 2400,
            emeraldRuby: 1500,
          },
          {
            duration: "90 min",
            guest: 4000,
            sapphire: 3200,
            emeraldRuby: 2000,
          },
        ],
      },
    ],

    "Quality Time Together": [
      {
        name: "Couple's Spa Retreat",
        image: coupleSpa,
        description:
          "A Swedish Massage and a Head & Shoulder Massage for one person combined with a Calming Aromatherapy Massage and a Foot Reflexology for the other",
        pricing: [
          {
            duration: "90 min",
            guest: 6000,
            sapphire: 4800,
            emeraldRuby: 3000,
          },
        ],
      },
      {
        name: "Ladies Spa Retreat",
        image: ladiesRetreat,
        description:
          "Calming/ Rejuvenating Aromatherapy Massage; Coffee Cane Sugar Body Scrub and a Moisturizing Vit C Facial",
        pricing: [
          {
            duration: "2hr 30 min",
            guest: 6000,
            sapphire: 4800,
            emeraldRuby: 3000,
          },
        ],
      },
      {
        name: "Gentlemen's Spa Retreat",
        image: menSpa,
        description:
          "Swedish with Wintergreen & Eucalyptus Oil Blend; Head Neck Shoulder Massage and a Moisturizing Vit C Facial",
        pricing: [
          {
            duration: "90 min",
            guest: 5000,
            sapphire: 4000,
            emeraldRuby: 2500,
          },
        ],
      },
    ],

    Facials: [
      {
        name: "Moisturizing Vit C Facial",
        image: vitaminC,
        description:
          "The facial works well for all skin types and contains goodness of Austarlian Kakadu Plum, Alpha Arbutin & Kojic Acid. It gently exfoliates, hydrates and also provides an even skin tone.",
        pricing: [
          {
            duration: "60 min",
            guest: 2400,
            sapphire: 1920,
            emeraldRuby: 1200,
          },
        ],
      },
      {
        name: "Brightening 24K Gold Facial",
        image: goldFacial,
        description:
          "Discover a radiant glow with this 24K Gold facial which brightens the skin’s natural glow. Korian White Lotus, Glutathione & Peptides leave your skin with improved texture and a radiant glow. The facial is suitable for all skin types.",

        pricing: [
          {
            duration: "90 min",
            guest: 2600,
            sapphire: 2080,
            emeraldRuby: 1300,
          },
        ],
      },
      {
        name: "Firming French Red Vine Facial",
        image: redVine,
        description:
          "Discover youthful skin with this facial containing Resveratrol known for skin firming. Suitable for all skin types this facial is highly recommended for anyone seeking age defying benefits of French Red Vine.",
        pricing: [
          {
            duration: "90 min",
            guest: 2600,
            sapphire: 2080,
            emeraldRuby: 1300,
          },
        ],
      },
    ],

    "Body Scrubs & Wraps": [
      {
        section: "beauty",
        name: "Coffee Cane Sugar Body Scrub",
        image: coffeeScrub,
        description:
          "A nourishing oil based polish consisting of Coffee Grains and Cane Sugar which thoroughly exfoliate the skin, leaving it soft, supple and smooth. Coffee stimulates and energizes dull, sluggish skin. The combination is excellent to reduce tan and even tone the skin.",

        pricing: [
          {
            duration: "90 min",
            guest: 1900,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "beauty",
        name: "Charcoal Scrub",
        image: charcoalScrub,
        description:
          "Charcoal scrub exfoliates the skin and lightens the complexion. Charcoal when used as a scrub binds dirt and helps to pull it out of the pores.",
        pricing: [
          {
            duration: "90 min",
            guest: 1900,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "beauty",
        name: "Charcoal Body Wrap",
        image: charcoalWrap,
        description:
          "It begins with Charcoal body scrub followed by an application of masque. This intense detoxification process stimulates cellular renewal to heal and repair damaged skin.",

        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 2080,
            emeraldRuby: 1300,
          },
        ],
      },

      {
        section: "beauty",
        name: "Ubtan Glow Body Scrub",
        image: ubtanWrap,
        description:
          " A cream based scrub which exfoliates, tightens and gives the skin a glowing radiance. The traditional Organic Indian Ubtan has the antiseptic properties of turmeric along with the rejuvenating properties of saffron and almond.",

        pricing: [
          {
            duration: "90 min",
            guest: 1900,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "beauty",
        name: "Ubtan Glow Body Wrap",
        image: ubtanScrub,
        description: "abc",
        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "Immunity",
        name: "Seaweed Scrub",
        image: seaweedScrub,
        description:
          "A nutrient cream based scrub that gently exfoliates, cleanses, detoxes and hydrates the skin, leaving it nourished and soft. Seaweed cleanses and improves skin tone and is known for it’s detoxifying properties. It also delivers antioxidants to the skin to fight free radicals.",

        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "Immunity",
        name: "Seaweed Body Wrap",
        image: seaweedWrap,
        description:
          "It starts with a Seaweed scrub followed by the application of a wrap which nourishes the exfoliated skin. It’s a nutrient cream and mud based wrap that gently hydrates, tones and tightens the skin, leaving it nourished and soft. Seaweed de-toxifies, cleanses, balances and improves skin tone.",
        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        section: "Age-Defying",
        name: "Firming Body Wrap",
        image: bodyWrap,
        description:
          "It begins with Coffee Cane Sugar body scrub followed with a detoxing mud based wrap useful to firm and tighten the skin. It energizes sluggish skin and reduces cellulite.",

        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },
    ],

    "Signature Therapies": [
      {
        name: "Cocoa Butter Scrub Massage",
        image: cocoaButter,
        description:
          "It’s a wonderful combination of massage and scrub that gives dual benefit of exfoliation and relaxation. Cocoa Butter and Coconut Scrub is best known for being rich in vitamins and maintains the moisture levels leaving the skin smooth and firm.",
        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },
      {
        name: "Swedish Massage with Pain Relief Eucalyptus Balm",
        image: eucalypMassage,
        description:
          "A pain-relieving Swedish Massage using a warming after sport & work out balm to soothe tired muscles as well as reduce aches & pain. The balm contains Eucalyptus & Rosemary which warm the muscles & increase blood circulation.",
        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },
      {
        name: "Moroccon Scrub Massage With Argan Oil and Oudh",
        image: moroccanScrub,
        description:
          "A rejuvenating & moisturizing cream-based body scrub massage with the natural, gentle exfoliation of cooling bamboo seeds. Moroccon Argan oil, rich in natural fatty acids & vitamin E,  is very beneficial for all skin types, especially dry, mature skin. It  protects against  UV rays & hydrates the skin. Luxurious Oudh cools and rejuvenates the skin.",
        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        name: "Brightening Aromatherapy Massage with Rosehip oil",
        image: oilTherapy,
        description:
          "A moderate pressure aromatherapy massage using a blend of Rosehip Oil, this massage helps reduce dullness of skin, protects against sun damage & keeps skin moisturized. Rosehip oil is extremely rich in Vitamin A & E which help hydrate & regenerate the skin. It also contains lycopene & beta carotene which help lighten the skin.",

        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },

      {
        name: "Warming Velvet Massage with Cocum Butter & Beeswax",
        image: velvetMassage,
        description:
          "A moderate pressure aromatherapy massage using a blend of Rosehip Oil, this massage helps reduce dullness of skin, protects against sun damage & keeps skin moisturized. Rosehip oil is extremely rich in Vitamin A & E which help hydrate & regenerate the skin. It also contains lycopene & beta carotene which help lighten the skin.",

        pricing: [
          {
            duration: "60 min",
            guest: 2600,
            sapphire: 1520,
            emeraldRuby: 950,
          },
        ],
      },
    ],
  };

  const category =
    selectedReason === "Beauty" ? selectedBeautyCategory : selectedReason;

  const treatements =
    recommendations[category as keyof typeof recommendations] || [];

  return (
    <div className="recommendation-page">
      <h2>{category}</h2>
      {category === "Facials" && (
        <div className="category-description">
          <h3>
            Choose from our facials based on your skin type and the benefits you
            need.
          </h3>
        </div>
      )}

      {category === "Body Scrubs & Wraps" && (
        <div className="category-description">
          <h3>
            Choose from our body scrubs and wraps to exfoliate, nourish, and
            rejuvenate your skin.
          </h3>
        </div>
      )}

      <div className="treatment-list">
        {treatements.map((treatment, index) => (
          <div key={treatment.name}>
            {category === "Body Scrubs & Wraps" &&
              (index === 0 ||
                treatment.section !== treatements[index - 1].section) && (
                <h2 className="section-heading">
                  {treatment.section.charAt(0).toUpperCase() +
                    treatment.section.slice(1)}
                </h2>
              )}

            <div className="treatment-card">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="treatment-image"
              />

              <h3>{treatment.name}</h3>

              <p>{treatment.description}</p>

              <table className="pricing-table">
                <thead>
                  <tr>
                    <th className="membership-col">Membership</th>

                    {treatment.pricing.map((option) => (
                      <th key={option.duration} className="duration-col">
                        {option.duration}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="membership-col">Guest</td>

                    {treatment.pricing.map((option) => (
                      <td key={option.duration} className="price-cell">
                        ₹{option.guest}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="membership-col">Sapphire Members</td>

                    {treatment.pricing.map((option) => (
                      <td key={option.duration} className="price-cell">
                        ₹{option.sapphire}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="membership-col">Emerald/Ruby Members</td>

                    {treatment.pricing.map((option) => (
                      <td key={option.duration} className="price-cell">
                        ₹{option.emeraldRuby}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>

              <button
                className="book-button"
                onClick={() => setScreen("booking")}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationPage;
