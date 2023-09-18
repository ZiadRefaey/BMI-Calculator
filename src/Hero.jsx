import "./Hero.css";
import HeroHeader from "./HeroHeader";
import BMIForm from "./BMIForm";
import BMIResults from "./BMIResults";
export default function Hero() {
  return (
    <>
      <header className="hero">
        <HeroHeader />
        <section className="bmi-calculator">
          <BMIForm />
          <BMIResults />
        </section>
      </header>
    </>
  );
}
