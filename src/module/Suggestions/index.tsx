import { suggestions } from "../../utils";
import "../../styles/Suggestions.css";

const Suggestions = () => {
  return (
    <section style={{ marginTop: "6rem" }}>
      <div className="suggestions-wrapper">
        {suggestions.map((suggestion, index) => {
          return (
            <div key={index} className="suggestion-holder">
              <img src={suggestion.image} alt="food" />
              <div>
                <h3 className="heading-s" style={{ marginBottom: "1.5rem" }}>
                  {suggestion.label}
                </h3>
                <p className="body-s">{suggestion.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Suggestions;
