import React, { Component } from 'react';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
// // import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
