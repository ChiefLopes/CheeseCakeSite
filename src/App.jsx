import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
