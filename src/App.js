import "./App.css";
import "./index.css";
import Practise from "./components/Practise";
import { Route, Routes } from "react-router-dom";
import Second from "./components/Second";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Practise />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
