import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Base } from "./pages/Base";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/base" element={<Base />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
