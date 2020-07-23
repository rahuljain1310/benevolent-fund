import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import CommentPage from './Pages/CommentCard/CommentPage';
import About from './Pages/About/About';
import MediaCard from './Pages/Media/Media';
import './App.css';

function MainPage () {
  return (
    <div>
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
        <Switch>
          <Route exact path='/testimonial/:id' component={TestimonialPage}/>
          <Route path='*' component={MainPage}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
