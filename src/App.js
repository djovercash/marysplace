import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
