import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Lorem ipsum generator</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs</label>
        <input
          id="amount"
          type="number"
          name="amount"
          max="8"
          min="1"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((t) => (
          <p key={nanoid()}>{t}</p>
        ))}
      </div>
    </section>
  );
}

export default App;
