import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from './reducers';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     todos : ['eat','sleep','pray','code']
  //   }
  // }
  
  render() {
    return (
      <div>
        <Header />
        <Todos todos={['item1']}/>
        <AddTodo/>
        <Footer />
      </div>
    );
  }
}

export default App;
