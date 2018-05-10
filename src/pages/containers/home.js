import React, { Component } from 'react';
import './home.css';
import './home.scss';
import Form from './../../form/containers/form.js';
import Layout from '../components/layout.js'

class App extends Component {
  render() {
    return (
      <div className="container" >
        <Layout />
        <Form />
      </div>
    );
  }
}

export default App;
