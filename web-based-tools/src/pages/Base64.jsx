import { useEffect, useState } from "react";

export function Base64() {
  const [operation, setOperation] = useState("Encode");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const operations = ["Decode", "Encode"];

  useEffect(() => {
    if (!text) {
      setResult("");
      return;
    }
    if (operation === "Encode") {
      setResult(btoa(text));
    } else {
      setResult(atob(text));
    }
  }, [operation, text]);

  return (
    <div>
      <h2>Base64 Convertor</h2>
      <div>
        <label>
          Select the operation
          <div>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              {operations.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      ></textarea>
      <div>{result}</div>
    </div>
  );
}

//This is typically used to make binary data safe to transport as strictly text.
//Base64 translates binary into safe text.
