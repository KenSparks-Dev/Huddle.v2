import React from 'react';
import './App.css';
import Header from './components/Header';
import MainImage from './components/MainImage'
import Text from './components/Text'
import 'font-awesome/css/font-awesome.css'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" >
      {/* <Header /> */}
      <div className="container d-flex justify-content-center">
        <div className="row text-md-center image-text-container">
          <div className="col-lg-7 col-xl-7 pr-xl-5 text-lg-left">
            <MainImage />
          </div>
          <div className="col-lg-5 col-xl-5 p-xl-5 text-center text-lg-left">
            <Text />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
