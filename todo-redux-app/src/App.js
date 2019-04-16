import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos : null
    }

  }
  
  render() {
    return (
      <div>
        <Header />
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default App;
