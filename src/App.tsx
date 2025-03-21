import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll visibility for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="main-content flex-grow-1" style={{ padding: "20px" }}>
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "10px 15px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;