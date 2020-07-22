import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
<<<<<<< HEAD
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';
import Beneficiaries from './Pages/NewBeneficiaries/Beneficiaries';
import Grid from './Pages/CommentCard/CommentGrid';
=======
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import CommentPage from './Pages/CommentCard/CommentPage';
import About from './Pages/About/About';
>>>>>>> 448bea360cd1b0be2381b7befa4400154fa891f3
import './App.css';

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="page-container">
      <Header />
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <CommentPage/>
      <DisqusComments />
      <Footer />
>>>>>>> 448bea360cd1b0be2381b7befa4400154fa891f3
    </div>
  )
}

export default App;
