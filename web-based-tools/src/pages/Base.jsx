import { useEffect, useState } from "react";

export function Base() {
  const bases = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState(2);
  const [toBase, setToBase] = useState(10);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    if (!number) {
      setAnswer("");
      return;
    }
    let base10 = parseInt(number, fromBase);
    if (toBase == 10) {
      setAnswer(base10);
      return;
    }
    let ans = "";
    while (base10 > 0) {
      let rem = base10 % toBase;
      base10 = Math.floor(base10 / toBase);
      ans = rem.toString() + ans;
    }
    setAnswer(ans);
  }, [number, toBase, fromBase]);

  return (
    <>
      <h2>Base Converter</h2>

      <div>
        <h3>From: </h3>
        <label>
          {"Base "}
          <select
            value={fromBase}
            onChange={(e) => setFromBase(parseInt(e.target.value))}
          >
            {bases.map((base, index) => (
              <option key={index} value={base}>
                {base}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input
        type="text"
        placeholder="Enter the number"
        onChange={(e) => setNumber(e.target.value)}
      ></input>

      <div>
        <h3>To: </h3>
        <label>
          {"Base "}
          <select
            value={toBase}
            onChange={(e) => setToBase(parseInt(e.target.value))}
          >
            {bases.map((base, index) => (
              <option key={index} value={base}>
                {base}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>{answer}</div>
    </>
  );
}
