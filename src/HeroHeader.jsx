import "./Hero.css";
import logo from "./assets/images/logo.svg";
export default function HeroHeader() {
  return (
    <>
      <img src={logo} alt="website's logo" className="logo" />
      <h1 className="heading-l">Body Mass Index Calculator</h1>
      <p className="body-s hero-text">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </>
  );
}
