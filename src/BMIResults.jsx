import { useEffect } from "react";
import "./hero.css";

export default function BMIResults({ MetricBMI, ImperialBMI, metric }) {
  let BMIResult;
  if (MetricBMI && metric === "metric") {
    BMIResult = (
      <div className="bmi-results-header">
        <h3 className="body-m-bold">Your BMI is...</h3>
        <span className="heading-l">{MetricBMI.toFixed(1)}</span>
        <div className="bmi-results-body">
          <p className="body-s">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span>63.3kgs - 85.2kgs.</span>
          </p>
        </div>
      </div>
    );
  } else if (ImperialBMI && metric === "imperial") {
    BMIResult = (
      <div className="bmi-results-header">
        <h3 className="body-m-bold">Your BMI is...</h3>
        <span className="heading-l">{ImperialBMI.toFixed(1)}</span>
        <div className="bmi-results-body">
          <p className="body-s">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span>63.3kgs - 85.2kgs.</span>
          </p>
        </div>
      </div>
    );
  } else {
    BMIResult = (
      <div className="bmi-results-header">
        <h3 className="heading-m">Welcome</h3>
        <p className="body-s white">
          Enter your height and weight and you’ll see your BMI result here
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="bmi-results">{BMIResult}</div>
    </>
  );
}
