import "./hero.css";
export default function BMIResults() {
  return (
    <>
      <div className="bmi-results">
        <div className="bmi-results-header">
          <h3 className="body-m-bold">Your BMI is...</h3>
          <span className="heading-l">23.4</span>
          <div className="bmi-results-body">
            <p className="body-s">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between <span>63.3kgs - 85.2kgs.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
