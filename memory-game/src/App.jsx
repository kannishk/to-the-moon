import { RecoilRoot, useRecoilState } from "recoil";

import {
  // match as matchAtom,
  flip as flipAtom,
  previous as previousAtom,
  previousFlip as previousFlipAtom,
  current as currentAtom,
} from "./state/atoms";

import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const alphas = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const randomAlphas = shuffle(alphas);

  return (
    <RecoilRoot>
      <div className="grid-container">
        {randomAlphas.map((alpha, index) => (
          <Alpha alpha={alpha} index={index} key={index} />
        ))}
      </div>
    </RecoilRoot>
  );
}

// eslint-disable-next-line react/prop-types
function Alpha({ alpha, index }) {
  const [flip, setFlip] = useRecoilState(flipAtom(index));
  const [current, setCurrent] = useRecoilState(currentAtom);
  const [previous, setPrevious] = useRecoilState(previousAtom);

  function handleClick(alpha) {}

  return (
    <div
      key={index}
      className="grid-item"
      onClick={() => {
        handleClick(alpha);
      }}
    >
      {flip == true || previousFlip == true ? alpha : "?"}
    </div>
  );
}

export default App;

// click clcikn -> ok : dono band
