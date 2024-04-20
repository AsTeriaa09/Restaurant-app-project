import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TableBook from "./components/TableBook";
import SinglePage from "./components/SinglePage";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-table" element={<TableBook />} />
          <Route path="/singleProduct/:id" element={<SinglePage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
