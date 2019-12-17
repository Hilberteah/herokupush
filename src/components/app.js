import React, { Component } from 'react';
 

const MY_SECRET_KEY = process.env.MY_SECRET_KEY



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Heroku Push!</h1>
        <h2>{MY_SECRET_KEY}</h2>
        
      </div>
    );
  }
}
