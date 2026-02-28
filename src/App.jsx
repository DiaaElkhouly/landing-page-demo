/**
 * Main App Component - Professional Redesign
 */

import "./styles/global.css";
import "./App.css";
import { Navbar, LandContent, TestimonialsSection, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <LandContent />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
