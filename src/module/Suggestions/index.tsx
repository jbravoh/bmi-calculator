import { suggestions } from "../../utils";
import "../../styles/Suggestions.css";

const Suggestions = () => {
  return (
    <section>
      <div className="suggestions-wrapper">
        {suggestions.map((suggestion, index) => {
          return (
            <div key={index}>
              <img src={suggestion.image} alt="food" />
              <h3 className="heading-s">{suggestion.label}</h3>
              <p className="body-s">{suggestion.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Suggestions;
