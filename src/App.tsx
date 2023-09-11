import { createRoot } from "react-dom/client";

import Hero from "./module/Hero";
import Results from "./module/Results";
import Limitations from "./module/Limitations";
import "../src/styles/App.css";
import Suggestions from "./module/Suggestions";

const App = () => {
  return (
    <>
      <Hero />
      <Results />
      <Suggestions />
      <Limitations />
    </>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<App />);
