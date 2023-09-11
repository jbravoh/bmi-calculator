import images from "./images/images";

export const limitations = [
  {
    name: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    name: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    name: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    name: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    name: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export const suggestions = [
  {
    image: images.food,
    label: "Healthy eating",
    content:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    image: images.exercise,
    label: "Regular exercise",
    content:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    image: images.sleep,
    label: "Adequate Sleep",
    content:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

export const calculateMetricBMI = (
  weight: number | string,
  height: number | string,
) => {
  if (typeof weight === "string") {
    weight = parseInt(weight);
  }

  if (typeof height === "string") {
    height = parseInt(height);
  }
  const heightInMeters = height / 100;
  const bmiValue = weight / heightInMeters ** 2;
  return bmiValue.toFixed(1);
};

export const calculateImperialBMI = (
  stone: number | string,
  pounds: number | string,
  feet: number | string,
  inches: number | string,
) => {
  if (typeof stone === "string") {
    stone = parseInt(stone);
  }

  if (typeof pounds === "string") {
    pounds = parseInt(pounds);
  }

  if (typeof feet === "string") {
    feet = parseInt(feet);
  }

  if (typeof inches === "string") {
    inches = parseInt(inches);
  }

  const weight = stone * 14 + pounds;

  const height = feet * 12 + inches;

  const bmiValue = (weight / height ** 2) * 703;
  return bmiValue.toFixed(1);
};
