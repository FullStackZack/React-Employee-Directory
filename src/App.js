import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import Footer from "./components/Footer";
import API from "./utils/API";


function App() {

  return (
    <div>
      <Navbar />
      <Container>
        <EmployeeDirectory />
      </Container>
      <Footer />
    </div>
  )

}

export default App;
