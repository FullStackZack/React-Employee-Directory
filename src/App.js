import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer";
import API from "./utils/API";


function App() {

  return (
    <div>
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
      <Footer />
    </div>
  )

}

export default App;
