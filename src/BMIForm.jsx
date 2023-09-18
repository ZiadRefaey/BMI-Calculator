import { useState, useEffect } from "react";

import "./hero.css";
export default function BMIForm({
  metric,
  setMetric,
  MetricBMI,
  ImperialBMI,
  setMetricBMI,
  setImperialBMI,
}) {
  const [metricHeight, setMetricHeight] = useState("");
  const [metricWeight, setMetricWeight] = useState("");
  const [imperialHeightFt, setImperialHeightFt] = useState("");
  const [imperialHeightIn, setImperialHeightIn] = useState("");
  const [imperialWeightSt, setImperialWeightSt] = useState("");
  const [imperialWeightLbs, setImperialWeightLbs] = useState("");
  let imperialWeight = imperialWeightSt * 14 + imperialWeightLbs;
  let imperialHeight = imperialHeightFt * 12 + imperialHeightIn;
  useEffect(
    function () {
      if (metricHeight && metricWeight) {
        const heightInMeters = metricHeight / 100;
        setMetricBMI(metricWeight / (heightInMeters * heightInMeters));
      }
      console.log(MetricBMI);
    },
    [metricHeight, metricWeight]
  );

  useEffect(
    function () {
      if (
        imperialHeightFt &&
        imperialHeightIn &&
        imperialWeightSt &&
        imperialWeightLbs
      ) {
        const heightInInches =
          Number(imperialHeightFt) * 12 + Number(imperialHeightIn);
        const weightInPounds =
          Number(imperialWeightSt) * 14 + Number(imperialWeightLbs);

        setImperialBMI(
          (weightInPounds * 703) / (heightInInches * heightInInches)
        );
      }
    },
    [imperialHeightFt, imperialHeightIn, imperialWeightSt, imperialWeightLbs]
  );

  function handleRadioChange(e) {
    setMetric(e.target.value);
  }
  return (
    <>
      <h2 className="heading-m">Enter your details below</h2>
      <form className="form">
        <div className="metric-container">
          <div className="radio-button">
            <input
              type="radio"
              id="metricRadio"
              name="calc_type"
              value="metric"
              onChange={handleRadioChange}
              checked={metric === "metric"} // Check based on the state
            />
            <label htmlFor="metricRadio" className="body-m-bold">
              Metric
            </label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="imperialRadio"
              name="calc_type"
              value="imperial"
              onChange={handleRadioChange}
              checked={metric === "imperial"} // Check based on the state
            />
            <label htmlFor="imperialRadio" className="body-m-bold">
              Imperial
            </label>
          </div>
        </div>
        <div className="body-details">
          {metric === "metric" && (
            <>
              <label
                className="body-label body-s gunmetal"
                htmlFor="metric-height"
              >
                Height
              </label>
              <div className="input-container ">
                <input
                  className="heading-m gunmetal"
                  type="number"
                  value={metricHeight}
                  onChange={(e) => {
                    setMetricHeight(e.target.value);
                    MetricBMI = metricWeight / (metricHeight * metricHeight);
                  }}
                  id="height"
                />
                <p className="heading-m metric-unit">cm</p>
              </div>
              <label className="body-label  body-s gunmetal" htmlFor="weight">
                Weight
              </label>
              <div className="input-container">
                <input
                  value={metricWeight}
                  onChange={(e) => {
                    setMetricWeight(e.target.value);
                    MetricBMI = metricWeight / (metricHeight * metricHeight);
                  }}
                  className="heading-m gunmetal"
                  type="number"
                  id="metric-weight"
                />
                <p className="heading-m metric-unit">kg</p>
              </div>
            </>
          )}
          {metric === "imperial" && (
            <>
              <label
                className="body-label body-s gunmetal"
                htmlFor="imperial-height-ft"
              >
                Height
              </label>
              <div className="input-imperial">
                <div className="input-container ">
                  <input
                    value={imperialHeightFt}
                    onChange={(e) => {
                      setImperialHeightFt(e.target.value);
                    }}
                    className="heading-m gunmetal"
                    type="number"
                    id="imperial-height-ft"
                  />
                  <p className="heading-m metric-unit">ft</p>
                </div>
                <div className="input-container">
                  <input
                    value={imperialHeightIn}
                    onChange={(e) => {
                      setImperialHeightIn(e.target.value);
                    }}
                    className="heading-m gunmetal"
                    type="number"
                    id="imperial-height-in"
                  />
                  <p className="heading-m metric-unit">in</p>
                </div>
              </div>

              <label
                className="body-label  body-s gunmetal weight"
                htmlFor="imperial-weight-st"
              >
                Weight
              </label>
              <div className="input-imperial">
                <div className="input-container">
                  <input
                    value={imperialWeightSt}
                    onChange={(e) => {
                      setImperialWeightSt(e.target.value);
                    }}
                    className="heading-m gunmetal"
                    type="number"
                    id="imperial-weight-st"
                  />
                  <p className="heading-m metric-unit">st</p>
                </div>
                <div className="input-container">
                  <input
                    value={imperialWeightLbs}
                    onChange={(e) => {
                      setImperialWeightLbs(e.target.value);
                    }}
                    className="heading-m gunmetal"
                    type="number"
                    id="imperial-weight-lbs"
                  />
                  <p className="heading-m metric-unit">lbs</p>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}
