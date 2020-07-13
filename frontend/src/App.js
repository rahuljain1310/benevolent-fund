import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './App.css';
import ImageCarousel from './Pages/carousel/Carousel';

function App() {
  return (
    <div>
      <Header/>
      <ImageCarousel />
      <Footer/>
    </div>
  );
}

export default App;
