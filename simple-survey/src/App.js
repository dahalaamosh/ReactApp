import React, { Component } from 'react';
import './App.css';
const uuid = require('uuid');
const firebase = require('firebase');
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid.v1(),
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted : false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event){
    event.preventDefault();
    this.setState({name: this.refs.name.value});
  }

  handleQuestionSubmit(event){
    firebase.database().ref('surveys/'+this.state.id).set({
      name: this.state.name,
      answers: this.state.answers
    });
    this.setState({submitted:true});
    event.preventDefault();
  }

  handleQuestionChange(event){
    var answers = this.state.answers;
    if(event.target.name === 'q1'){
      answers.q1 = event.target.value;
    }else if (event.target.name === 'q2') {
      answers.q2 = event.target.value;
    }else if (event.target.name === 'q3') {
      answers.q3 = event.target.value;
    }else if (event.target.name === 'q4') {
      answers.q4 = event.target.value;
    }
    this.setState({answers:answers},function(){
      console.log(this.state.answers);
    });
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false){
      user = <h2>Hello {this.state.name}</h2>;
      questions = <div className="questions">
        <form onSubmit = {this.handleQuestionSubmit.bind(this)}>
          <div className='query'>
          <label> What is your favorite operating system? </label> <br />
          <input type='radio' name='q1' value= 'OS X 10.6 Snow Leopard' onChange={this.handleQuestionChange}/> OS X 10.6 Snow Leopard <br />
          <input type='radio' name='q1' value= 'OS X 10.11: El Capitan (Gala)' onChange={this.handleQuestionChange}/> OS X 10.11: El Capitan (Gala) <br />
          <input type='radio' name='q1' value= 'macOS 10.12: Sierra (Fuji)' onChange={this.handleQuestionChange}/> macOS 10.12: Sierra (Fuji) <br />
          <input type='radio' name='q1' value= 'macOS 10.13: High Sierra' onChange={this.handleQuestionChange}/> macOS 10.13: High Sierra <br />
          </div>
          <div className='query'>
          <label> What is your favorite brand of TV? </label> <br />
          <input type='radio' name='q2' value= 'Sony' onChange={this.handleQuestionChange}/> Sony<br />
          <input type='radio' name='q2' value= 'Samsung' onChange={this.handleQuestionChange}/> Samsung <br />
          <input type='radio' name='q2' value= 'Panasonic' onChange={this.handleQuestionChange}/> Panasonic <br />
          <input type='radio' name='q2' value= 'Vizio' onChange={this.handleQuestionChange}/> Vizio <br />
          </div>
          <div className='query'>
          <label> What is your favorite Smartphone brand? </label> <br />
          <input type='radio' name='q3' value= 'Apple' onChange={this.handleQuestionChange}/> Apple <br />
          <input type='radio' name='q3' value= 'Samsung' onChange={this.handleQuestionChange}/> Samsung <br />
          <input type='radio' name='q3' value= 'Motorola' onChange={this.handleQuestionChange}/> Motorola <br />
          <input type='radio' name='q3' value= 'One Plus' onChange={this.handleQuestionChange}/> One Plus <br />
          </div>
          <div className='query'>
          <label> What is your favorite game? </label> <br />
          <input type='radio' name='q4' value= 'FIFA' onChange={this.handleQuestionChange}/> FIFA <br />
          <input type='radio' name='q4' value= 'COD' onChange={this.handleQuestionChange}/> COD <br />
          <input type='radio' name='q4' value= 'GTA' onChange={this.handleQuestionChange}/> GTA <br />
          <input type='radio' name='q4' value= 'NBA' onChange={this.handleQuestionChange}/> NBA <br />
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    } else if(!this.state.name && this.state.submitted === false){
      user = <div>
        <h2> Please Enter Your Name To Begin The Survey </h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder = 'John Smith' ref='name'/>
        </form>
      </div>;
      questions = '';
    }else if(this.state.submitted === true){
      user = <h2> Thank You {this.state.name} for taking part in survey. </h2>
    }
    return (
      <div>
        <header className="App App-header">
          <h1 className="App-title">A Simple Survey</h1>
        </header>
        <div className="App App-intro">
        {user}
        </div>
        {questions}
      </div>
    );
  }
}

export default App;
