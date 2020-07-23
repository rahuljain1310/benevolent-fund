import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
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
<<<<<<< HEAD
>>>>>>> 448bea360cd1b0be2381b7befa4400154fa891f3
=======
import MediaCard from './Pages/Media/Media';
>>>>>>> 0548c937ff6ce4914252306690f71ffa807f82ee
import './App.css';

function MainPage () {
  return (
<<<<<<< HEAD
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
=======
    <div>
>>>>>>> 0548c937ff6ce4914252306690f71ffa807f82ee
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <MediaCard />
      <CommentPage/>
      <DisqusComments />
    </div>
  )
}

function TestimonialPage () {
  return (
    <div>
      <CommentPage/>
    </div>
  )
}

function App() {
  return (
    <div className="page-container">
      <Header />
      <Router>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/testimonial/:id' component={TestimonialPage}/>
      </Router>
      <Footer />
>>>>>>> 448bea360cd1b0be2381b7befa4400154fa891f3
    </div>
  )
}

export default App;
