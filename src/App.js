import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import NumberOfLapsForm from "./components/NumberOfLapsForm";
import PdfCreatorButton from "./components/PdfCreatorComponents/PdfCreatorButton";
import Footer from "./components/Footer";

function App() {
  const [showPdfButton, setShowPdfButton] = useState(false);

  return (
    <Container
      fluid
      className="bg-light bg-gradient full-height d-flex flex-column justify-content-between"
    >
      <Header />
      <NumberOfLapsForm
        setShowPdfButton={setShowPdfButton}
        showPdfButton={showPdfButton}
      />
      {showPdfButton && <PdfCreatorButton />}
      <Footer />
    </Container>
  );
}

export default App;
