import React from 'react';
/*import {BrowserRouter as Router, Route} from "react-router-dom";*/
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
/*import FormFeedback from './Pages/FormFeedback/FormFeedback';*/
/*import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';*/
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import CommentGrid from './Pages/CommentCard/CommentGrid';
/*import CommentPage from './Pages/CommentCard/CommentPage';*/
import About from './Pages/About/About';
import MediaCard from './Pages/Media/Media';
/*import ImageCarousel from './Pages/Carousel/Carousel';*/
import './App.css';

function MainPage () {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <About/>
        <Beneficiaries />
        <BulletinBoard />
        <MediaCard />
        <CommentGrid/>
        <DisqusComments/>
        <Footer/>
        </div>
      </div>
  )
}
/*
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
    </div>
  )
}
*/
export default MainPage;
