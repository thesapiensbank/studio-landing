import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Details from "./pages/details/Details";

function App() {
  return (
    <Router>
      <div className="h-full w-full">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/details/:collection"
            element={<Details />}
          ></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
