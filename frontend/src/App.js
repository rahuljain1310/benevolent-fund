import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ImageCarousel from './Pages/carousel/Carousel';
import BulletinBoard from './Pages/bulletinboard/Bulletinboard';
/*import DisqusComments from './Pages/Comments/Comments';*/
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header/>
      <ImageCarousel />
      <BulletinBoard />
      <FormFeedback/>
      <Footer/>
    </div>
  );
}
//    <DisqusComments/> 
export default App;
