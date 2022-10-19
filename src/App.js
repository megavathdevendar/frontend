import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./componets/sign up";
import Login from "./componets/Login";
import Home from "./componets/Home";
import Lodingpage from "./componets/Lodingpage";
import Addemployee from "./componets/addemployee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>

            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lodingpage" element={<Lodingpage />} />
            <Route path="/addemployee" element={<Addemployee />} />

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;