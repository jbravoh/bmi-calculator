import LimitationsCard from "./LimitationsCard";
import { limitations } from "../../utils";

const Limitations = () => {
  return (
    <section className="section-wrapper">
      <h2>Limitations of BMI</h2>
      <p>
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      {limitations.map((limitation, index) => {
        return (
          <div key={index}>
            <LimitationsCard
              name={limitation.name}
              description={limitation.description}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Limitations;
