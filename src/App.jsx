import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import Signup from "./Component/SignUp/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
