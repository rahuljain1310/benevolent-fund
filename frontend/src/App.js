import React from 'react';
<<<<<<< HEAD
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Pages/About/About'
//import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
=======
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
import DisqusComments from './Pages/Comments/Comments';
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import About from './Pages/About/About';
import './App.css';
<<<<<<< HEAD
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Pages/Carousel/Carousel';
import Beneficiaries from './Pages/Beneficiaries/Beneficiaries';
import CommentCard from './Pages/CommentCard/CommentCard';
import CommentPage from './Pages/CommentCard/CommentPage';


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Carousel />
      <FormFeedback/>
      <DisqusComments/>
      <Beneficiaries/>
      <CommentCard/>
      <CommentPage/>
      <Footer/>
=======

function App() {
  return (
    <div className="page-container">
      <Header />
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <DisqusComments />
      <Footer />
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
    </div>
  )
}
  export default App;

/*
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
>>>>>>> da2d363315172d117be2a51ea3bbe73dc7bf15af
    </div>
  );
}*
//    <DisqusComments/>
export default App;
*/
