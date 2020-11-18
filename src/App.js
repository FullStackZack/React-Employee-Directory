import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Footer from "./components/Footer";
import API from "./utils/API";


function App() {

  return (
    <div>
      <Container>
        <Navbar />
        <EmployeeDirectory />
      </Container>
      <Footer />
    </div>
  )

}

export default App;
