import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <div className="body">
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
