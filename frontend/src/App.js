import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
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
