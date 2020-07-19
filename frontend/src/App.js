import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './Pages/About/About'
import ImageCarousel from './Pages/Carousel/Carousel';
import DisqusComments from './Pages/Comments/Comments';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';
import Beneficiaries from './Pages/NewBeneficiaries/Beneficiaries';
import Grid from './Pages/CommentCard/CommentGrid';
import './App.css';

function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <About/>
        <ImageCarousel />
        <hr style={{width: '80%', backgroundColor:'orange'}}/>
        <NewBulletinBoard />
        <Beneficiaries />
        <FormFeedback/>
        <Grid/>
        <DisqusComments/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
