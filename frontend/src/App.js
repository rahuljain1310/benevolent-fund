import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import DisqusComments from './Pages/Comments/Comments';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <DisqusComments/>
      <Footer/>
    </div>
  );
}

export default App;
