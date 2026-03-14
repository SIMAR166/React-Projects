import React from 'react'
import Navbar from './components/Navbar'
import Container from "./components/Container";
import Footer from './components/Footer';
import About from './components/About';
import Last from './components/Last';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Container />
      <Footer />
      <About />
      <Last />
    </div>
  )
}

export default App