import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Staff from "./Staff";
import Compas from "./Compas";
import Ebona from "./Ebona";
import Laguardia from "./Laguardia";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <Routes>
            <Route path="/" element={<Register />} />     
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/Compas" element={<Compas />} />
            <Route path="/Ebona" element={<Ebona />} />
            <Route path="/Laguardia" element={<Laguardia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
