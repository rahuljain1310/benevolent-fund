import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
import {Beneficiaries, BeneficiaryDetails} from './Pages/Beneficiary/Beneficiaries';
import CommentGrid from './Pages/CommentCard/CommentGrid';
import About from './Pages/About/About';
import MediaCard from './Pages/Media/Media';
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
        </div>
      </div>
  )
}

function BeneficiariesPage () {
  return (
    <div>
      <BeneficiaryDetails/>
    </div>
  )
}

function App() {
  return (
    <div className="page-container">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/beneficiaries' component={BeneficiariesPage}/>
          <Route path='*' component={MainPage}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
