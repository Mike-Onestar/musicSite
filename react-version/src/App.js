import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Navbar, Home, Music, Contact, Footer } from "./exports";

function App() {
  return (
    // Router wraps everything - it's like the building itself
    <Router>
      <Navbar />
      {/* Layout is like the basic structure every room shares */}
      <Layout>
        {/* Routes is like a directory board showing what's where */}
        <Routes>
          {/* Each Route is like saying "if someone goes to /, show them Home" */}
          {/* EX: <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} /> {/* Add this line */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
