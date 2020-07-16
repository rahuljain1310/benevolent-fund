import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Pages/About/About'
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
import Beneficiaries from './Pages/Beneficiaries/Beneficiaries'
import DisqusComments from './Pages/Comments/Comments';
import './App.css';

function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <About/>
        <BulletinBoard/>
        <Beneficiaries/>
        <DisqusComments/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
