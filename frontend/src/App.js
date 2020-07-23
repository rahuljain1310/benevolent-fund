import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
import CommentGrid from './Pages/CommentCard/CommentGrid';
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import About from './Pages/About/About';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header />
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <CommentGrid/>
      <DisqusComments />
      <Footer />
    </div>
  )
}

export default App;
