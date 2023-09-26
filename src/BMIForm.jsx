import { useState, useEffect, useRef } from "react";

import "./Hero.css";
export default function BMIForm({
  metric,
  setMetric,
  setMetricBMI,
  setImperialBMI,
  setLowerImperialRange,
  setLowerMetricRange,
  setHigherMetricRange,
  setHigherImperialRange,
}) {
  const [metricHeight, setMetricHeight] = useState("");
  const [metricWeight, setMetricWeight] = useState("");
  const [imperialHeightFt, setImperialHeightFt] = useState("");
  const [imperialHeightIn, setImperialHeightIn] = useState("");
  const [imperialWeightSt, setImperialWeightSt] = useState("");
  const [imperialWeightLbs, setImperialWeightLbs] = useState("");
  const inputRef = {
    metricH: useRef(null),
    metricW: useRef(null),
    imperialFt: useRef(null),
    imperialIn: useRef(null),
    imperialSt: useRef(null),
    imperialLb: useRef(null),
  };
  function handleParentClick(inputName) {
    if (inputRef[inputName].current) {
      inputRef[inputName].current.focus();
    }
  }
  let imperialWeight = imperialWeightSt * 14 + imperialWeightLbs;
  let imperialHeight = imperialHeightFt * 12 + imperialHeightIn;
  useEffect(
    function () {
      if (metricHeight && metricWeight) {
        const heightInMeters = metricHeight / 100;
        setMetricBMI(metricWeight / (heightInMeters * heightInMeters));
        setLowerMetricRange(18.5 * (heightInMeters * heightInMeters));
        setHigherMetricRange(24.9 * (heightInMeters * heightInMeters));
      }
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
        setLowerImperialRange((18.5 * heightInInches * heightInInches) / 703);
        setHigherImperialRange((24.9 * heightInInches * heightInInches) / 703);
      }
    },
    [imperialHeightFt, imperialHeightIn, imperialWeightSt, imperialWeightLbs]
  );

  function handleRadioChange(e) {
    setMetric(e.target.value);
  }
  return (
    <>
      <h2 className="heading-m form-header">Enter your details below</h2>
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
              <div className="form-inputs-container  metric-inputs-container">
                <div className="label-input-container">
                  <label
                    className="body-label body-s gunmetal"
                    htmlFor="metric-height"
                  >
                    Height
                  </label>

                  <div
                    className="input-container "
                    onClick={() => handleParentClick("metricH")}
                  >
                    <input
                      className="heading-m gunmetal"
                      type="number"
                      value={metricHeight}
                      onChange={(e) => {
                        setMetricHeight(e.target.value);
                        MetricBMI =
                          metricWeight / (metricHeight * metricHeight);
                      }}
                      id="height"
                      ref={inputRef.metricH}
                    />
                    <p className="heading-m metric-unit">cm</p>
                  </div>
                </div>

                <div className="label-input-container">
                  <label
                    className="body-label  body-s gunmetal weight"
                    htmlFor="weight"
                  >
                    Weight
                  </label>
                  <div
                    className="input-container"
                    onClick={() => handleParentClick("metricW")}
                  >
                    <input
                      value={metricWeight}
                      onChange={(e) => {
                        setMetricWeight(e.target.value);
                        MetricBMI =
                          metricWeight / (metricHeight * metricHeight);
                      }}
                      className="heading-m gunmetal"
                      type="number"
                      id="metric-weight"
                      ref={inputRef.metricW}
                    />
                    <p className="heading-m metric-unit">kg</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {metric === "imperial" && (
            <>
              <div className="form-inputs-container">
                <div className="label-input-container ">
                  <label
                    className="body-label body-s gunmetal"
                    htmlFor="imperial-height-ft"
                  >
                    Height
                  </label>
                  <div className="input-imperial">
                    <div
                      className="input-container "
                      onClick={() => handleParentClick("imperialFt")}
                    >
                      <input
                        value={imperialHeightFt}
                        onChange={(e) => {
                          setImperialHeightFt(e.target.value);
                        }}
                        className="heading-m gunmetal"
                        type="number"
                        id="imperial-height-ft"
                        ref={inputRef.imperialFt}
                      />
                      <p className="heading-m metric-unit">ft</p>
                    </div>
                    <div
                      className="input-container"
                      onClick={() => handleParentClick("imperialIn")}
                    >
                      <input
                        value={imperialHeightIn}
                        onChange={(e) => {
                          setImperialHeightIn(e.target.value);
                        }}
                        className="heading-m gunmetal"
                        type="number"
                        id="imperial-height-in"
                        ref={inputRef.imperialIn}
                      />
                      <p className="heading-m metric-unit">in</p>
                    </div>
                  </div>
                </div>

                <div className="label-input-container  metric-label-input-container">
                  <label
                    className="body-label  body-s gunmetal weight"
                    htmlFor="imperial-weight-st"
                  >
                    Weight
                  </label>
                  <div className="input-imperial">
                    <div
                      className="input-container"
                      onClick={() => handleParentClick("imperialSt")}
                    >
                      <input
                        value={imperialWeightSt}
                        onChange={(e) => {
                          setImperialWeightSt(e.target.value);
                        }}
                        className="heading-m gunmetal"
                        type="number"
                        id="imperial-weight-st"
                        ref={inputRef.imperialSt}
                      />
                      <p className="heading-m metric-unit">st</p>
                    </div>
                    <div
                      className="input-container"
                      onClick={() => handleParentClick("imperialLb")}
                    >
                      <input
                        value={imperialWeightLbs}
                        onChange={(e) => {
                          setImperialWeightLbs(e.target.value);
                        }}
                        className="heading-m gunmetal"
                        type="number"
                        id="imperial-weight-lbs"
                        ref={inputRef.imperialLb}
                      />
                      <p className="heading-m metric-unit">lbs</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}
