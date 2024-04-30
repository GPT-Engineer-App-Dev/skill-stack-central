import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperDetails from "./pages/DeveloperDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/developer/:id" element={<DeveloperDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
