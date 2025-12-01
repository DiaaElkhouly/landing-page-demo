import "./App.css";
import NavBar from "./assets/components/navbar/navbar";
import LandContent from "./assets/components/landContent/landContent";
import TestimonialsSection from "./assets/components/TestimonialsSection/TestimonialsSection";
import Footer from "./assets/components/Footer/Footer";

import { createTheme, ThemeProvider } from "@mui/material";

// container
import Container from "@mui/material/Container";

const Theme = createTheme({
  palette: {
    mode: "dark",
    colors: {
      main: "#4f3af6",
      light: "#7a78ff",
      dark: "#3a2bd6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00d4ff",
      contrastText: "#000000",
    },
    background: {
      default: "#030712",
      paper: "#0f1726",
    },
  },
  typography: {
    fontFamily: "nacelle",
  },
});

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <ThemeProvider theme={Theme}>
          <NavBar />
          <LandContent />
          <TestimonialsSection />
          <Footer />
        </ThemeProvider>
      </Container>
    </>
  );
}
// https://open.cruip.com/
export default App;
