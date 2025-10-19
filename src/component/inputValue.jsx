import { useState } from "react";

function TextInputExample() {
  const [text, settext] = useState("");

  const handleChange = (event) => {
    settext(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Text Input Example</h1>
      <input
        type="text"
        placeholder="enter your name..."
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInputExample;
