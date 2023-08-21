import { useState } from "react";

type radioOptions = "metric" | "imperial";

const Calculator = () => {
  const [radioSelected, setRadioSelected] = useState<radioOptions>("metric");

  return (
    <>
      <form>
        <h2>Enter your details below</h2>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="metric"
              checked={radioSelected === "metric"}
              onClick={() => setRadioSelected("metric")}
            />
            Metric
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="imperial"
              checked={radioSelected === "imperial"}
              onClick={() => setRadioSelected("imperial")}
            />
            Imperial
          </label>
        </div>

        {radioSelected === "metric" ? (
          <>
            <div className="input">
              <label>
                <input />
                Height
              </label>
            </div>
            <div className="input">
              <label>
                <input />
                Weight
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <label>
                <input />
                <input />
                Height
              </label>
            </div>
            <div className="input">
              <label>
                <input />
                <input />
                Weight
              </label>
            </div>
          </>
        )}

        <p>Your BMI is...</p>
      </form>
    </>
  );
};

export default Calculator;
