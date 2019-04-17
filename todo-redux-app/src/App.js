import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from './reducers';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';


const initialState = {
  todos: ['eat','sleep','pray','code']
}

const store = createStore(reducer,initialState);


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
        <Todos todos={store.getState().todos}/>
        <Footer />
      </div>
    );
  }
}

export default App;
