import "./hero.css";
export default function BMIForm() {
  return (
    <>
      <h2 className="heading-m">Enter your details below</h2>
      <form className="form">
        <div className="metric">
          <div className="radio-button">
            <input type="radio" id="metric" name="calc_type" value="metric" />
            <label htmlFor="metric" className="body-m-bold">
              Metric
            </label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="imperial"
              name="calc_type"
              value="imperial"
            />
            <label htmlFor="imperial" className="body-m-bold">
              Imperial
            </label>
          </div>
        </div>
        <div className="body-details">
          <label className="body-label body-s gunmetal" htmlFor="height">
            Height
          </label>
          <div className="input-container ">
            <input className="heading-m gunmetal" type="number" id="height" />
            <p className="heading-m metric-unit">cm</p>
          </div>
          <label className="body-label  body-s gunmetal" htmlFor="weight">
            Weight
          </label>
          <div className="input-container">
            <input className="heading-m gunmetal" type="number" id="weight" />
            <p className="heading-m metric-unit">kg</p>
          </div>
        </div>
      </form>
    </>
  );
}
