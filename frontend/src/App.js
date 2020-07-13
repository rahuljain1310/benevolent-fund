import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './App.css';
import ImageCarousel from './Pages/carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';


function App() {
  return (
    <div>
      <Header/>
      <ImageCarousel />
      <BulletinBoard />
      <Footer/>
    </div>
  );
}

export default App;
