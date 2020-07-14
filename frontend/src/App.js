import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
import DisqusComments from './Pages/Comments/Comments';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <ImageCarousel />
      <BulletinBoard />
      <DisqusComments/>
      <Footer/>
    </div>
  );
}

export default App;
