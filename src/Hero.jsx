import "./Hero.css";
import HeroHeader from "./HeroHeader";
import BMIForm from "./BMIForm";
import BMIResults from "./BMIResults";
import { useState } from "react";
export default function Hero() {
  const [metric, setMetric] = useState("metric");
  const [MetricBMI, setMetricBMI] = useState(0);
  const [ImperialBMI, setImperialBMI] = useState(0);
  const [lowerMetricRange, setLowerMetricRange] = useState();
  const [higherMetricRange, setHigherMetricRange] = useState();
  const [lowerImperialRange, setLowerImperialRange] = useState();
  const [higherImperialRange, setHigherImperialRange] = useState();
  return (
    <>
      <header className="hero">
        <HeroHeader />
        <section className="bmi-calculator">
          <BMIForm
            metric={metric}
            setMetric={setMetric}
            setMetricBMI={setMetricBMI}
            setImperialBMI={setImperialBMI}
            setLowerMetricRange={setLowerMetricRange}
            setHigherMetricRange={setHigherMetricRange}
            setLowerImperialRange={setLowerImperialRange}
            setHigherImperialRange={setHigherImperialRange}
          />
          <BMIResults
            MetricBMI={MetricBMI}
            ImperialBMI={ImperialBMI}
            metric={metric}
            lowerMetricRange={lowerMetricRange}
            higherMetricRange={higherMetricRange}
            lowerImperialRange={lowerImperialRange}
            higherImperialRange={higherImperialRange}
          />
        </section>
      </header>
    </>
  );
}

{
  /* <BMIForm
            metricHeight={metricHeight}
            metricWeight={metricWeight}
            setMetricHeight={setMetricHeight}
            setMetricWeight={setMetricWeight}
            imperialHeightFt={imperialHeightFt}
            setImperialHeightFt={setImperialHeightFt}
            imperialHeightIn={imperialHeightIn}
            setImperialHeightIn={setImperialHeightIn}
            imperialWeightSt={imperialWeightSt}
            setImperialWeightSt={setImperialWeightSt}
            imperialWeightLbs={imperialWeightLbs}
            setImperialWeightLbs={setImperialWeightLbs}
          /> */
}
