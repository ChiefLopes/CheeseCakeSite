import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
