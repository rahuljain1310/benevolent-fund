import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/Carousel/Carousel';
import BulletinBoard from './Pages/Bulletinboard/Bulletinboard';
import DisqusComments from './Pages/Comments/Comments';
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';

function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <ImageCarousel />
        <BulletinBoard />
        <FormFeedback/>
        <DisqusComments/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
