import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import ParaOne from './components/ParaOne';
import ParaTwo from './components/ParaTwo';
import ParaThree from './components/ParaThree';
import ParaFour from './components/ParaFour';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <ParaOne />
      <ParaTwo />
      <ParaThree />
      <ParaFour />
      <Selects />
      <Search />
      <Footer />
    </div>
  );
}

export default App;