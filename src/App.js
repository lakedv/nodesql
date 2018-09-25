import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      titulo: "Vamos a ver el State.",
      subtitulo: "En esta clase vamos a trabajar un poco.",
    };
  }
  
  
  render() {

    
    const { titulo, subtitulo } = this.state;

    return (
      
    <section>
      <h2>{ titulo }</h2>
      <p>{ subtitulo }</p>
      </section>
    );
  }
}

export default App;