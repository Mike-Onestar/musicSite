import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We'll add other routes as we create them */}
          {/* <Route path="/music" element={<Music />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
