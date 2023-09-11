import { useState, useEffect } from "react";
import "../../styles/Calculator.css";
import { calculateImperialBMI, calculateMetricBMI } from "../../utils";

type radioOptions = "metric" | "imperial";

const Calculator = () => {
  const [radioSelected, setRadioSelected] = useState<radioOptions>("metric");
  const [result, setResult] = useState<string | undefined>("");

  const [heightMetric, setHeightMetric] = useState<string>("");
  const [weightMetric, setWeightMetric] = useState<string>("");
  const [heightFt, setHeightFt] = useState<string>("");
  const [heightIn, setHeightIn] = useState<string>("");

  const [weightSt, setWeightSt] = useState<string>("");
  const [weightLbs, setWeightLbs] = useState<string>("");

  console.log("height", heightMetric);
  console.log("weight", weightMetric);
  useEffect(() => {
    if (heightMetric && weightMetric && radioSelected === "metric") {
      setResult(calculateMetricBMI(weightMetric, heightMetric));
    } else if (
      heightFt &&
      heightIn &&
      weightLbs &&
      weightSt &&
      radioSelected === "imperial"
    ) {
      setResult(calculateImperialBMI(weightSt, weightLbs, heightFt, heightIn));
    } else {
      setResult(undefined);
    }
  }, [
    heightFt,
    heightIn,
    heightMetric,
    radioSelected,
    weightLbs,
    weightMetric,
    weightSt,
  ]);

  console.log(calculateMetricBMI(Number(weightMetric), Number(heightMetric)));

  return (
    <div className="calculator-container">
      <h2 className="heading-s">Enter your details below</h2>
      <div className="radio-wrapper">
        <div className="radio flex-item">
          <input
            type="radio"
            id="metric"
            checked={radioSelected === "metric"}
            onClick={() => setRadioSelected("metric")}
          />
          <label className="radio-label body-m-bold" htmlFor="metric">
            Metric
          </label>
        </div>

        <div className="radio flex-item">
          <input
            type="radio"
            id="imperial"
            checked={radioSelected === "imperial"}
            onClick={() => setRadioSelected("imperial")}
          />
          <label className="radio-label body-m-bold" htmlFor="imperial">
            Imperial
          </label>
        </div>
      </div>

      {radioSelected === "metric" ? (
        <div className="text-input-wrapper">
          <div className="flex-item">
            <label htmlFor="height" className="body-s">
              Height
            </label>
            <div className="text-input-group">
              <input
                className="text-input heading-m"
                id="height"
                placeholder="0"
                type="number"
                onChange={(e) => {
                  setHeightMetric(e.target.value);
                }}
              />
              <span
                className="unit-label heading-s"
                style={{ marginLeft: "-3.3rem" }}
              >
                cm
              </span>
            </div>
          </div>
          <div className="flex-item">
            <label htmlFor="weight" className="body-s">
              Weight
            </label>
            <div className="text-input-group">
              <input
                className="text-input heading-m"
                id="weight"
                placeholder="0"
                onChange={(e) => {
                  setWeightMetric(e.target.value);
                }}
              />
              <p className="unit-label heading-s"> kg</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-input-wrapper">
            <div className="flex-item">
              <label htmlFor="height" className="body-s">
                Height
              </label>
              <div className="text-input-group">
                <input
                  className="text-input heading-m"
                  id="height"
                  placeholder="0"
                  type="number"
                  onChange={(e) => {
                    setHeightFt(e.target.value);
                  }}
                />
                <span
                  className="unit-label heading-s"
                  style={{ marginLeft: "-3.3rem" }}
                >
                  ft
                </span>
              </div>
            </div>
            <div className="flex-item">
              <div className="text-input-group">
                <input
                  className="text-input heading-m"
                  id="height"
                  placeholder="0"
                  type="number"
                  onChange={(e) => {
                    setHeightIn(e.target.value);
                  }}
                />
                <span
                  className="unit-label heading-s"
                  style={{ marginLeft: "-3.3rem" }}
                >
                  in
                </span>
              </div>
            </div>
          </div>

          <div className="text-input-wrapper">
            <div className="flex-item">
              <label htmlFor="weight" className="body-s">
                Weight
              </label>
              <div className="text-input-group">
                <input
                  className="text-input heading-m"
                  id="weight"
                  placeholder="0"
                  onChange={(e) => {
                    setWeightSt(e.target.value);
                  }}
                />
                <p className="unit-label heading-s"> st</p>
              </div>
            </div>
            <div className="flex-item">
              <div className="text-input-group">
                <input
                  className="text-input heading-m"
                  id="weight"
                  placeholder="0"
                  onChange={(e) => {
                    setWeightLbs(e.target.value);
                  }}
                />
                <p className="unit-label heading-s">lbs</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="calculator-result-container">
        <div className="bmi-result-wrapper">
          <p>Your BMI is...</p>
          <p className="heading-xl">{result}</p>
        </div>
        <p className="body-s" id="result-description">
          Your BMI suggests you’re a healthy weight. Your ideal weight is
          between 63.3kgs - 85.2kgs.
        </p>
      </div>
    </div>
  );
};

export default Calculator;
