import "./App.css";
import NavBar from "./assets/components/navbar/navbar";
import LandContent from "./assets/components/landContent/landContent";
import TestimonialsSection from "./assets/components/TestimonialsSection/TestimonialsSection";
import Footer from "./assets/components/Footer/Footer";

import { createTheme, ThemeProvider } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: ["nacelle"],
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <LandContent />
        <TestimonialsSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}
// https://open.cruip.com/
export default App;
