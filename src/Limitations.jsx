import "./Limitations.css";
import gender from "./assets/images/icon-gender.svg";
import age from "./assets/images/icon-age.svg";
import muscle from "./assets/images/icon-muscle.svg";
import pregnancy from "./assets/images/icon-pregnancy.svg";
import race from "./assets/images/icon-race.svg";
import CurvedRight from "./assets/images/pattern-curved-line-right.svg";

import { useEffect, useState } from "react";
const limitations = [
  {
    id: 1,
    icon: gender,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    id: 2,
    icon: age,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    id: 3,
    icon: muscle,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    id: 4,
    icon: pregnancy,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    id: 5,
    icon: race,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

function Limit({ icon, title, description }) {
  return (
    <>
      <div className="limit-container">
        <div className="limit-header">
          <div className="limit-icon-container">
            <img src={icon} alt={`${title} icon`} />
          </div>
          <h4 className="heading-s gunmetal">{title}</h4>
        </div>
        <div className="limit-body">
          <p className="body-m electricblue">{description}</p>
        </div>
      </div>
    </>
  );
}
export default function Limitations() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const SmallScreenComponent = (
    <section className="limitations-container">
      <div className="limitations-text">
        <h3 className="gunmetal heading-i">Limitations of BMI</h3>
        <p className="electricblue body-m limitations-description">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="limitations-cards-container">
        {limitations.map((limit) => (
          <Limit
            key={limit.id}
            icon={limit.icon}
            title={limit.title}
            description={limit.description}
          />
        ))}
      </div>
    </section>
  );
  const LargeScreenComponent = (
    <section className="limitations-container">
      <img
        src={CurvedRight}
        alt="Curved line to the right"
        className="curved-right"
      />
      <div className="limitations-text">
        <h3 className="gunmetal heading-i">Limitations of BMI</h3>
        <p className="electricblue body-m limitations-description">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="limitations-cards-container">
        <div className="limitations-group-1">
          <Limit
            icon={limitations[0].icon}
            title={limitations[0].title}
            description={limitations[0].description}
          />
        </div>

        <div className="limitations-group-2">
          <Limit
            icon={limitations[1].icon}
            title={limitations[1].title}
            description={limitations[1].description}
          />

          <Limit
            icon={limitations[2].icon}
            title={limitations[2].title}
            description={limitations[2].description}
          />
        </div>

        <div className="limitations-group-3">
          <Limit
            icon={limitations[3].icon}
            title={limitations[3].title}
            description={limitations[3].description}
          />

          <Limit
            icon={limitations[4].icon}
            title={limitations[4].title}
            description={limitations[4].description}
          />
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>{windowWidth < 1300 ? SmallScreenComponent : LargeScreenComponent}</>
  );
}
