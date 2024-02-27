import { useEffect, useState } from "react";
export function Binary() {
  const [operation, setOperation] = useState("Encode");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const operations = ["Decode", "Encode"];

  useEffect(() => {
    if (!text) {
      setResult("");
      return;
    }
    if (operation === "Decode") {
      let ans = "";
      for (let i = 0; i < text.length; i += 8) {
        let byte = text.substring(i, i + 8);
        ans += String.fromCharCode(parseInt(byte, 2));
      }
      setResult(ans);
      return;
    } else {
      let ans = "";
      for (let i = 0; i < text.length; i++) {
        let byte = text.charCodeAt(i).toString(2);
        while (byte.length < 8) {
          byte = "0" + byte;
        }
        ans += byte;
      }
      setResult(ans);
    }
  }, [operation, text]);

  return (
    <div>
      <h2>Binary-Ascii</h2>
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
