import { createRoot } from "react-dom/client";

import Hero from "./module/Hero";
import Results from "./module/Results";
import Limitations from "./module/Limitations";

const App = () => {
  return (
    <>
      <Hero />
      <Results />
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
