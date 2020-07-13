import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/Carousel/Carousel';
import './App.css';

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
