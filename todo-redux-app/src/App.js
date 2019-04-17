import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos : ['eat','sleep','pray','code']
    }

  }
  
  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos}/>
        <Footer />
      </div>
    );
  }
}

export default App;
