import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Content from './component/content';
class App extends Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div><Content/></div>
      </div>
    );
  }
}

export default App;
