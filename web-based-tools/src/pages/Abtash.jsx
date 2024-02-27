import { useEffect, useState } from "react";

export function Abtash() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    if (!text) {
      setResult("");
      return;
    }
    let ans = "";
    for (let i = 0; i < text.length; i++) {
      let char = String.fromCharCode(219 - text.charCodeAt(i));
      ans += char;
    }
    setResult(ans);
  }, [text]);
  return (
    <>
      <h2>Abtash Cipher</h2>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text"
      ></textarea>
      <div>{result}</div>
    </>
  );
}
