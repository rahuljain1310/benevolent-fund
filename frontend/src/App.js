import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
<<<<<<< HEAD
import BulletinBoard from './Pages/Bulletin/BulletinBoard';
import DisqusComments from './Pages/Comments/Comments';
import Beneficiaries from './Pages/Beneficiary/Beneficiaries';
import About from './Pages/About/About';
=======
import About from './Pages/About/About'
import ImageCarousel from './Pages/Carousel/Carousel';
import DisqusComments from './Pages/Comments/Comments';
import FormFeedback from './Pages/FormFeedback/FormFeedback';
import NewBulletinBoard from './Pages/NewBulletinBoard/BulletinBoard';
import Beneficiaries from './Pages/NewBeneficiaries/Beneficiaries';
import CommentPage from './Pages/CommentCard/CommentPage';
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="page-container">
      <Header />
      <About />
      <BulletinBoard />
      <Beneficiaries />
      <DisqusComments />
      <Footer />
    </div>
  )
}
  export default App;
=======
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <About/>
        <ImageCarousel />
        <hr style={{width: '80%', backgroundColor:'orange'}}/>
        <NewBulletinBoard />
        <Beneficiaries />
        <FormFeedback/>
        <CommentPage/>
        <DisqusComments/>
        <Footer/>
      </div>
    </div>
  )
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default App;
=======
>>>>>>> 239e916738575c87cb00583e897afd19b01339ed
export default App;
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
