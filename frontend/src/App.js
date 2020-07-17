import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/Carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
import DisqusComments from './Pages/Comments/Comments';
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import BigContributeButton from './Pages/BigContributeButton/BigContributeButton.js'
import SmallContributeButton from './Pages/SmallContributeButton/SmallContributeButton.js'


function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <ImageCarousel />
        <BulletinBoard />
        <FormFeedback/>
        <DisqusComments/>
        <BigContributeButton />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
