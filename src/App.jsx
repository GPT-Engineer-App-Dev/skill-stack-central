import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperDetails from "./pages/DeveloperDetails.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={localStorage.getItem("auth_token") ? <Index /> : <Navigate to="/login" />} />
        <Route path="/developer/:id" element={localStorage.getItem("auth_token") ? <DeveloperDetails /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
