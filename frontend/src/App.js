import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ImageCarousel from './Pages/Carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
import DisqusComments from './Pages/Comments/Comments';
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';
import Beneficiaries from './Pages/NewBeneficiaries/Beneficiaries';

function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <ImageCarousel />
        {/* <BulletinBoard /> */}
        <hr style={{width: '80%', backgroundColor:'orange'}}/>
        <NewBulletinBoard />
        <Beneficiaries />
        <FormFeedback/>
        {/* <About/> */}
        <DisqusComments/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
