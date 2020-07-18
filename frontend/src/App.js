import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
import DisqusComments from './Pages/Comments/Comments';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';
import Beneficiaries from './Pages/NewBeneficiaries/Beneficiaries';
import About from './Pages/About/About';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header />
      <About />
      <NewBulletinBoard />
      <Beneficiaries />
      <DisqusComments />
      <Footer />
    </div>
  );
}

export default App;
