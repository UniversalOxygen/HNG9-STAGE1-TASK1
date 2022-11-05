import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
