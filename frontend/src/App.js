import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './Pages/About/About'
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
<<<<<<< HEAD
/*import DisqusComments from './Pages/Comments/Comments';*/
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentCard from './Pages/CommentCard/CommentCard';


function App() {
  return (
    <div>
      <Header/>
      <ImageCarousel />
      <CommentCard />
      <BulletinBoard />
      <FormFeedback/>
      <Footer/>
=======
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
>>>>>>> da2d363315172d117be2a51ea3bbe73dc7bf15af
    </div>
  );
}
//    <DisqusComments/> 
export default App;
