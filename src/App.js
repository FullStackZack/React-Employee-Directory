import React from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer";


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
