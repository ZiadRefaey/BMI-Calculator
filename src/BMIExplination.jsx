import "./index.css";
import "./BMIexplination.css";
import CurvedLeft from "./assets/images/pattern-curved-line-left.svg";
import explination from "./assets/images/image-man-eating.webp";
export default function BMIExplination() {
  return (
    <>
      <section className="bmi-explination-container">
        <img
          src={CurvedLeft}
          alt="Curved line to the left"
          className="curved-left"
        />
        <div className="imgimg">
          <div className="explination-img">
            <img src={explination} alt="A guy eating sushi"></img>
          </div>
        </div>
        <div className="explination-body">
          <h3 className="gunmetal explination-title">
            What your BMI result mean
          </h3>
          <p className="body-m electricblue">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>
    </>
  );
}
