import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import About from './Pages/About/About';
import MediaCard from './Pages/Media/Media';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header />
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <MediaCard />
      <DisqusComments />
      <Footer />
    </div>
  );
}

export default App;
