import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Education from "./components/Education/Education";
import Skills from "./components/Skills";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>

      <Navbar />
      {/* <Experience /> */}
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/Skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
