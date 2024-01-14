import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
