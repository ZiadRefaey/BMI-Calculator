import { useEffect } from "react";
import "./hero.css";

export default function BMIResults({
  MetricBMI,
  ImperialBMI,
  metric,
  lowerImperialRange,
  higherImperialRange,
  lowerMetricRange,
  higherMetricRange,
}) {
  let BMIResult;

  let MetricHealthLevel;
  if (MetricBMI >= 30) {
    MetricHealthLevel = "obese";
  } else if (MetricBMI >= 25 && MetricBMI <= 29.99) {
    MetricHealthLevel = "overweight";
  } else if (MetricBMI >= 18.5 && MetricBMI < 24.9) {
    MetricHealthLevel = "a healthy weight";
  } else {
    MetricHealthLevel = "underweight";
  }

  let ImperialHealthLevel;
  if (ImperialBMI >= 30) {
    ImperialHealthLevel = "obese";
  } else if (ImperialBMI >= 25 && ImperialBMI <= 29.99) {
    ImperialHealthLevel = "overweight";
  } else if (ImperialBMI >= 18.5 && ImperialBMI < 24.9) {
    ImperialHealthLevel = "a healthy weight";
  } else {
    ImperialHealthLevel = "underweight";
  }

  if (MetricBMI && metric === "metric") {
    BMIResult = (
      <div className="bmi-results-header">
        <div className="bmi-results-title">
          <h3 className="body-m-bold">Your BMI is...</h3>
          <span className="heading-l">{MetricBMI.toFixed(1)}</span>
        </div>
        <div className="bmi-results-body">
          <p className="body-s">
            Your BMI suggests you’re {MetricHealthLevel}. Your ideal weight is
            between{" "}
            <span>
              {lowerMetricRange.toFixed(1)}kgs - {higherMetricRange.toFixed(1)}
              kgs.
            </span>
          </p>
        </div>
      </div>
    );
  } else if (ImperialBMI && metric === "imperial") {
    BMIResult = (
      <div className="bmi-results-header">
        <div className="bmi-results-title">
          <h3 className="body-m-bold">Your BMI is...</h3>
          <span className="heading-l">{ImperialBMI.toFixed(1)}</span>
        </div>
        <div className="bmi-results-body">
          <p className="body-s">
            Your BMI suggests you’re {ImperialHealthLevel}. Your ideal weight is
            between
            <span>
              {lowerImperialRange.toFixed(1)}lbs -
              {higherImperialRange.toFixed(1)}lbs.
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    BMIResult = (
      <div className="bmi-results-header empty-results">
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
