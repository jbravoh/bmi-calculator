import images from "../images/images";
import "../styles/Results.css";

const Results = () => {
  return (
    <section style={{ marginTop: "8.19rem" }}>
      <div className="results-wrapper">
        <div id="results-background-image">
          <img src={images.person} alt="person" className="shrink-image" />
        </div>
        <div style={{ width: "29rem" }}>
          <h2 className="heading-l">What your BMI result means</h2>

          <p className="body-s" style={{ marginTop: "2.19rem" }}>
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy
            weight.&apos; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
