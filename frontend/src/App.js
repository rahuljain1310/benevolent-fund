import React, { useEffect } from 'react';
import {MemoryRouter as Router, Route, Switch, useLocation} from "react-router-dom";
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
        <About/>
        <Beneficiaries />
        <BulletinBoard />
        <MediaCard />
        <CommentGrid/>
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="page-container">
      <Router>
        <Header />
        <ScrollToTop/>
        <Switch>
          <Route path='/beneficiaries' component={BeneficiariesPage}/>
          <Route path='/' component={MainPage}/>
        </Switch>
        <DisqusComments/>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
