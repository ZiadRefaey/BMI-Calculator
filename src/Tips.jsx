import "./Tips.css";

import eating from "./assets/images/icon-eating.svg";
import exercise from "./assets/images/icon-exercise.svg";
import sleep from "./assets/images/icon-sleep.svg";
function Tip({ img, title, children }) {
  return (
    <>
      <div className="tip-container">
        <div className="tip-img-container">
          <img src={img} alt="Tip icon" className="tip-icon" />
        </div>
        <h4 className="gunmetal heading-m tip-title">{title}</h4>
        <p className="electricblue body-m tip-desc">{children}</p>
      </div>
    </>
  );
}
export default function Tips() {
  return (
    <>
      <div className="tips-container">
        <Tip img={eating} title={"Healthy eating"}>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </Tip>
        <Tip img={exercise} title={"Regular exercise"}>
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </Tip>
        <Tip img={sleep} title={"Adequate sleep"}>
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </Tip>
      </div>
    </>
  );
}
