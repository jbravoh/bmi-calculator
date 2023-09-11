import Calculator from "./Calculator";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero-wrapper">
        <div className="hero-text-wrapper">
          <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
            Body Mass Index Calculator
          </h1>
          <p className="body-s">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <Calculator />

        <div id="background-image"></div>
      </div>
    </section>
  );
};

export default Hero;
