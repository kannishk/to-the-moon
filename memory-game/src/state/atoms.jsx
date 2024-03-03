import { atom, atomFamily } from "recoil";
// export const match = atomFamily({
//   key: "match",
//   default: true
// });
export const previous = atom({
  key: "previous",
  default: "",
});
export const current = atom({
  key: "current",
  default: "",
});
export const flip = atomFamily({
  key: "flip",
  default: (index) => false,
});
// export const previousFlip = atomFamily({
//   key: "flip",
//   default: (index) => false,
// });
