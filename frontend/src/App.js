import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import DisqusComments from './Pages/Comments/Comments';
import './App.css';
import FormFeedback from './Pages/FormFeedback/FormFeedback';


function App() {
  return (
    <div>
      <Header/>
      <FormFeedback/>
      <div>
        Hello World !
      </div>
      <DisqusComments/>
      <Footer/>
    </div>
  );
}

export default App;
